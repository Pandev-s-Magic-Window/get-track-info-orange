import type {WebSocketSubject} from "rxjs/webSocket";
import {Subject} from "rxjs";
import type {SettingsGlobalScopeHelper} from "../settings/settings-global-scope-helper";
import type {WsMessageFromClient} from "../ws-client/ws-message-from-client";
import type {WsMessageFromServer} from "../ws-client/ws-message-from-server";

export interface AppState {
  app_name: string;

  emission_mode: {
    value: 'active' | 'passive',
    local_storage_key: string
  };

  ws_server_config: {
    connection_url: {
      current_value?: string;
      default_value: string,
      local_storage_key: string
    }
  };

  ws_client: {
    subject?: WebSocketSubject<WsMessageFromClient | WsMessageFromServer>
    retry_stop_flag: Subject<string>
  };

  settings_global_scope_helper?: SettingsGlobalScopeHelper;

  logger: (...item_list: any[]) => void;
}
