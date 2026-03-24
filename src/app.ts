import {createDefaultAppState} from "./app/create-default-app-state";
import {SettingsGlobalScopeHelper} from "./settings/settings-global-scope-helper";
import {initApp} from "./app/init-app";

// Create the default state
const app_state = createDefaultAppState();

// Set the state for the settings global scope helper
SettingsGlobalScopeHelper.app_state = app_state;

// Launch the initApp
function launcher() {
  if (!Spicetify.Player || !Spicetify.Platform || !Spicetify.ReactJSX || !Spicetify.LocalStorage || !Spicetify.GraphQL) {
    setTimeout(launcher, 100);
    return;
  }

  // Run the main process
  initApp(app_state);
}

launcher();
