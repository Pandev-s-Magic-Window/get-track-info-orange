import type {AppState} from "../app/app-state";

import {APP_GLOBAL_SYMBOL_NAME} from "../app/app-global-symbol-name";
import {SettingsChanger} from "./settings-changer";

// Type for all member functions that can perform a setting change.
type SettingsGlobalScopeHelperFn =
  Exclude<
    keyof typeof SettingsGlobalScopeHelper,
    "app_state" | "prototype" | "getFullyQualifiedNameForMemberFn"
  >;

export class SettingsGlobalScopeHelper {
  static app_state?: AppState;

  static getFullyQualifiedNameForMemberFn(fn_name: SettingsGlobalScopeHelperFn) {
    return `${APP_GLOBAL_SYMBOL_NAME}.${SettingsGlobalScopeHelper.name}.${fn_name}`;
  }

  // Add setting helper functions down below:

  static changeEmissionMode(submit_button_el?: HTMLButtonElement) {
    if (SettingsGlobalScopeHelper.app_state == null) return;
    SettingsChanger.changeEmissionMode(SettingsGlobalScopeHelper.app_state, submit_button_el);
  }

  static changeWsServerConnectionUrl(submit_button_el?: HTMLButtonElement) {
    if (SettingsGlobalScopeHelper.app_state == null) return;
    SettingsChanger.changeWsServerConnectionUrl(SettingsGlobalScopeHelper.app_state, submit_button_el);
  }

  static changeIncludeExtraDataUrl(submit_button_el?: HTMLButtonElement) {
    if (SettingsGlobalScopeHelper.app_state == null) return;
    SettingsChanger.changeIncludeExtraDataUrl(SettingsGlobalScopeHelper.app_state, submit_button_el);
  }
}
