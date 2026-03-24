import type {AppState} from "./app-state";
import {openSettingsPage} from "../settings/open-settings-page";
import {sendTrackDataEmissionModeActive} from "../ws-client/send-track-data-emission-mode-active";
import {initWsClient} from "../ws-client/init-ws-client";
import {ThrottleQueue} from "rx-queue";
import {getCurrentPlayerPlayerTrack} from "../orange-bridge/get-current-track";
import {getTrueTrackIdForPlayerTrack} from "../orange-bridge/get-true-track-id-for-player-track";

export function initApp(app_state: AppState) {
  const saved_emission_mode = Spicetify.LocalStorage.get(app_state.emission_mode.local_storage_key) ?? undefined;
  if (saved_emission_mode != null) {
    app_state.emission_mode.value = saved_emission_mode as typeof app_state.emission_mode.value;
  }

  // Initialize the websocket client
  initWsClient(app_state);

  // Register the settings button in the profile menu
  const menu_item = new Spicetify.Menu.Item(
    app_state.app_name,
    true,
    () => {
      openSettingsPage(app_state);
    },
    "computer"
  );
  menu_item.register();
  menu_item.setState(false);

  // Set up the listeners for active mode, even if not currently in use.
  Spicetify.Player.addEventListener("songchange", () => sendTrackDataEmissionModeActive(app_state));
  Spicetify.Player.addEventListener("onplaypause", () => sendTrackDataEmissionModeActive(app_state));

  // Throttle on progress events by 1 second
  const on_progress_queue = new ThrottleQueue<string>(1000);
  on_progress_queue.subscribe((track_id) => {
    // Source of truth is always the player track
    const player_track = getCurrentPlayerPlayerTrack();
    if (player_track == null) {
      return;
    }
    if (getTrueTrackIdForPlayerTrack(player_track) != track_id) {
      return;
    }
    sendTrackDataEmissionModeActive(app_state)
  });
  Spicetify.Player.addEventListener("onprogress", () => {
    // Source of truth is always the player track
    const player_track = getCurrentPlayerPlayerTrack();
    if (player_track == null) {
      return;
    }
    on_progress_queue.next(
      getTrueTrackIdForPlayerTrack(player_track)
    );
  });
}
