import {delay, retry, Subject, takeUntil, tap} from "rxjs";
import {webSocket} from "rxjs/webSocket";
import type {AppState} from "../app/app-state";
import {sendTrackData} from "./send-track-data";
import type {WsMessageFromClient} from "./ws-message-from-client";
import type {WsMessageFromServer} from "./ws-message-from-server";
import {assert} from "typia";

export function initWsClient(app_state: AppState, delay_by_ms: number = 0) {
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
      error: (err) => app_state.logger("Connection ended prematurely (1):", err),
      complete: () => app_state.logger("Connection ended by server")
    }
  });

  // Subscribe the websocket client subject (this starts the action)
  app_state.ws_client.subject
    .pipe(
      takeUntil(app_state.ws_client.retry_stop_flag),

      // Log the error before retrying
      tap({
        error: (err) => app_state.logger("Connection ended prematurely (2):", err)
      }),

      // Delay if needed
      delay(delay_by_ms),

      // Retry the connection every second if there is a connection error
      retry({delay: 1000}),
    )
    .subscribe({
      next: async (data) => {
        app_state.logger("Received from server:", data);

        let request_id: string | null = null;
        try {
          const msg = assert<WsMessageFromServer>(data);
          request_id = msg.request_id ?? null;
        } catch (e) {
        }

        if (app_state.emission_mode.value !== 'passive') {
          return;
        }
        // For passive mode, send the current track data when a message is received
        await sendTrackData(app_state, request_id);
      },
      error: (err) => {
        // For all errors not covered by retry
        app_state.logger("Connection ended prematurely (3):", err);
        initWsClient(app_state, 1000);
      },
      complete: () => app_state.logger("Connection ended by server")
    });

  if (app_state.emission_mode.value !== 'active') {
    return;
  }
}
