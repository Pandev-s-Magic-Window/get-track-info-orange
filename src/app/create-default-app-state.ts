import {Subject} from "rxjs";
import type {AppState} from "./app-state";

export function createDefaultAppState(): AppState {
  return {
    app_name: "Get Track Info",

    emission_mode: {
      value: 'active',
      local_storage_key: 'mwGtiOrange:emissionMode',
    },

    ws_server_config: {
      connection_url: {
        default_value: 'ws://localhost:6603',
        local_storage_key: 'mwGtiOrange:wsServerConnectionUrl'
      }
    },

    ws_client: {
      retry_stop_flag: new Subject<string>(),
    },

    logger: (...item_list) => {
      console.log('[MwGtiOrange]', ...item_list);
    }
  }
}
