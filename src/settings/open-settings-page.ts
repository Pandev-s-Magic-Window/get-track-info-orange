import type {AppState} from "../app/app-state";
import {SettingsGlobalScopeHelper} from "./settings-global-scope-helper";

// There is probably a better way to do this, but it works for now
export function openSettingsPage(app_state: AppState) {
  const active_emission_mode_selected_attr =
    app_state.emission_mode.value === 'active' ? ' selected' : '';

  const passive_emission_mode_selected_attr =
    app_state.emission_mode.value === 'passive' ? ' selected' : '';

  const include_extra_data_selected_attr =
    app_state.include_extra_data_f.value === 'yes' ? ' selected' : '';

  const do_not_include_extra_data_selected_attr =
    app_state.include_extra_data_f.value === 'no' ? ' selected' : '';

  const change_mode_fn_str =
    SettingsGlobalScopeHelper.getFullyQualifiedNameForMemberFn("changeEmissionMode");

  const change_connection_uri_fn_str =
    SettingsGlobalScopeHelper.getFullyQualifiedNameForMemberFn("changeWsServerConnectionUrl");

  const change_include_extra_data_fn_str =
    SettingsGlobalScopeHelper.getFullyQualifiedNameForMemberFn("changeIncludeExtraDataUrl");

  Spicetify.PopupModal.display({
    title: "Get Track Info · Settings",
    isLarge: true,
    content: `
        <div>
            <label for="mwGtiOrangeMode" style="font-size: 1.1em">Emission Mode:</label>
            <select name="mwGtiOrangeMode"
              required
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #000000;
                color: #ffffff;
                width: 100%;
                margin-bottom: 5px;
              "
            >
              <option value="active"${active_emission_mode_selected_attr}>Active</option>
              <option value="passive"${passive_emission_mode_selected_attr}>Passive</option>
            </select>
               <div style="font-size: 0.9em; margin-bottom: 15px;">
                 <span style="color: #ffab7d; font-weight: bold;">Active Mode:</span>
                 <br>- When a track change is detected, track data will be emitted immediately to the WebSocket server.
                 <br>
                 <span style="color: #fff7a7; font-weight: bold;">Passive Mode:</span>
                 <br>· The WebSocket server has to request the current track data by sending a message.
                 <br>· Track changes/data will not be emitted automatically.
            </div>
              <button type="submit" onclick="${change_mode_fn_str}(this)"
              onmouseenter="if(!this.disabled) this.style.backgroundColor='#333333'"
              onmouseleave="if(!this.disabled) this.style.backgroundColor='#515151'"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #515151;
                color: #ffffff;
                width: 100%;
                font-size: 1em;
                cursor: pointer;
                margin-bottom: 30px;
            ">
                Change Emission Mode
            </button>
            <br>
            <hr>
            <br>
            <label for="mwGtiOrangeWsServerPort" style="font-size: 1.1em">WebSocket Connection URL:</label>
            <input type="text" name="mwGtiOrangeWsServerPort"
              placeholder="E.g.: ${app_state.ws_server_config.connection_url.default_value}"
              value="${app_state.ws_server_config.connection_url.current_value}"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #000000;
                color: #ffffff;
                width: 100%;
                margin-bottom: 5px;
            "/>
            <div style="font-size: 0.9em; margin-bottom: 15px;">
                In order to verify that a given URL is valid, a test connection is initiated.
                Make sure your WebSocket server is up and running before trying to change this setting.
            </div>
            <button type="submit" onclick="${change_connection_uri_fn_str}(this)"
              onmouseenter="if(!this.disabled) this.style.backgroundColor='#333333'"
              onmouseleave="if(!this.disabled) this.style.backgroundColor='#515151'"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #515151;
                color: #ffffff;
                width: 100%;
                font-size: 1em;
                cursor: pointer;
                margin-bottom: 30px;
            ">
                Run Test and Change Connection URL
            </button>
            <br>
            <hr>
            <br>
            <label for="mwGtiOrangeMode" style="font-size: 1.1em">Include Extra Data in JSON Response:</label>
            <select name="mwGtiOrangeMode"
              required
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #000000;
                color: #ffffff;
                width: 100%;
                margin-bottom: 5px;
              "
            >
              <option value="no"${do_not_include_extra_data_selected_attr}>No</option>
              <option value="yes"${include_extra_data_selected_attr}>Yes</option>
            </select>
               <div style="font-size: 0.9em; margin-bottom: 15px;">
                 Whether to include all data from the GraphQL endpoint name "getTrack".<br>
                 If enabled, you'll be able to find this data at JSON path: data -> extra_data.
            </div>
              <button type="submit" onclick="${change_include_extra_data_fn_str}(this)"
              onmouseenter="if(!this.disabled) this.style.backgroundColor='#333333'"
              onmouseleave="if(!this.disabled) this.style.backgroundColor='#515151'"
              style="
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #6d6d6d;
                background-color: #515151;
                color: #ffffff;
                width: 100%;
                font-size: 1em;
                cursor: pointer;
            ">
                Change Extra Data Setting
            </button>
        </div>
    `
  });
}
