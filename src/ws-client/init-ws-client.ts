import {catchError, retry, Subject, takeUntil,} from "rxjs";
import {webSocket} from "rxjs/webSocket";
import type {AppState} from "../app/app-state";
import {sendTrackData} from "./send-track-data";
import type {WsMessageFromClient} from "./ws-message-from-client";
import type {WsMessageFromServer} from "./ws-message-from-server";
import {isWsMessageFromServer} from "./is-ws-message-from-server";

export function initWsClient(app_state: AppState) {
  // Get the saved connection URL for the websocket server
  app_state.ws_server_config.connection_url.current_value =
    Spicetify.LocalStorage.get(app_state.ws_server_config.connection_url.local_storage_key) ?? undefined;

  if (app_state.ws_server_config.connection_url.current_value == null) {
    app_state.ws_server_config.connection_url.current_value = app_state.ws_server_config.connection_url.default_value;
  }

  // Unsubscribe the websocket client subject (this terminates all action/reties)
  if (app_state.ws_client.subject != null) {
    app_state.ws_client.retry_stop_flag.next("stop");
    app_state.ws_client.subject.unsubscribe();
    app_state.ws_client.retry_stop_flag = new Subject<string>();
  }

  // Create the websocket client subject (this won't start any connections yet)
  const connection_url = app_state.ws_server_config.connection_url.current_value;
  app_state.ws_client.subject = webSocket<WsMessageFromClient | WsMessageFromServer>({
    url: connection_url,
    openObserver: {
      next: () => {
        app_state.logger(`Connected to WebSocket server with URL: ${connection_url}`);
      },
      error: (err) => app_state.logger("Connection ended prematurely:", err),
      complete: () => app_state.logger("Connection ended by server")
    }
  });

  // Subscribe the websocket client subject (this starts the action)
  app_state.ws_client.subject
    .pipe(
      takeUntil(app_state.ws_client.retry_stop_flag),

      // Log the error before retrying
      catchError((err) => {
        app_state.logger("Connection ended prematurely:", err);
        throw err;
      }),

      // Retry the connection every second if there is a connection error
      retry(1000)
    )
    .subscribe({
      next: (data) => {
        app_state.logger("Received from server:", data);
        let request_id = null;
        if (isWsMessageFromServer(data)) {
          request_id = data.request_id ?? null;
        }

        if (app_state.emission_mode.value !== 'passive') {
          return;
        }
        // For passive mode, send the current track data when a message is received
        sendTrackData(app_state, request_id);
      },
      error: (err) => {
        // For all errors not covered by retry (I don't think this can be reached, but it is here anyway for safety)
        app_state.logger("Connection ended prematurely:", err);
        initWsClient(app_state);
      },
      complete: () => app_state.logger("Connection ended by server")
    });

  if (app_state.emission_mode.value !== 'active') {
    return;
  }
}
