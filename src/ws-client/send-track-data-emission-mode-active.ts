import type {AppState} from "../app/app-state";
import {sendTrackData} from "./send-track-data";

export async function sendTrackDataEmissionModeActive(
  app_state: AppState
) {
  if (app_state.emission_mode.value === 'active') {
    await sendTrackData(app_state, null);
  }
}
