import type {AppState} from "../app/app-state";
import {changeSubmitButtonState} from "./change-submit-button-state";
import {Subject, takeUntil, timeout} from "rxjs";
import {webSocket} from "rxjs/webSocket";
import {initWsClient} from "../ws-client/init-ws-client";

export class SettingsChanger {
  static changeEmissionMode(
    app_state: AppState,
    submit_button_el?: HTMLButtonElement
  ) {
    if (submit_button_el == null) {
      return;
    }

    const select_el = submit_button_el.previousElementSibling?.previousElementSibling as HTMLSelectElement | null | undefined;
    if (select_el == null) {
      return;
    }

    const selected_emission_mode = select_el.value;
    if (selected_emission_mode == null || selected_emission_mode === "") {
      changeSubmitButtonState(submit_button_el, "error", "Please submit a non-empty value");
      return;
    }

    // Save the new emission mode
    Spicetify.LocalStorage.set(
      app_state.emission_mode.local_storage_key,
      selected_emission_mode
    );
    app_state.emission_mode.value = selected_emission_mode as typeof app_state.emission_mode.value;

    changeSubmitButtonState(submit_button_el, "success");
  }

  static changeWsServerConnectionUrl(
    app_state: AppState,
    submit_button_el?: HTMLButtonElement
  ) {
    if (submit_button_el == null) {
      return;
    }

    const input_el = submit_button_el.previousElementSibling?.previousElementSibling as HTMLInputElement | null | undefined;
    if (input_el == null) {
      return;
    }

    changeSubmitButtonState(submit_button_el, "applying");

    const new_connection_url = input_el.value;
    if (new_connection_url == null || new_connection_url === "") {
      changeSubmitButtonState(submit_button_el, "error", "Please submit a non-empty value");
      return;
    }

    // Terminate the current websocket connection (if any)
    app_state.ws_client.retry_stop_flag.next("stop");
    app_state.ws_client.subject?.unsubscribe();

    // Prepare a test connection to see if the URL is valid
    const test_stop_flag = new Subject<string>();
    const test_ws_client = webSocket<string>({
      url: new_connection_url,
      deserializer: msg => msg.data,
      openObserver: {
        next: () => {
          changeSubmitButtonState(submit_button_el, "success");

          // Save the new valid connection URL for the websocket server
          Spicetify.LocalStorage.set(
            app_state.ws_server_config.connection_url.local_storage_key,
            new_connection_url
          );

          // Re-init the main websocket client
          initWsClient(app_state);

          // End the connection manually
          test_stop_flag.next("stop");
        },
        error: () => {
          changeSubmitButtonState(submit_button_el, "error", "Connection error");
          // Here we also want to re-init the main websocket client
          initWsClient(app_state)
        }
      }
    });

    // Run the test
    test_ws_client.pipe(
      takeUntil(test_stop_flag),
      timeout(5000)
    ).subscribe({
      error: () => {
        changeSubmitButtonState(submit_button_el, "error", "Connection error");
        // Here we also want to re-init the main websocket client
        initWsClient(app_state);
      }
    });
  }

}
