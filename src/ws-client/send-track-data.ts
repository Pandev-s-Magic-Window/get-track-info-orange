import type {AppState} from "../app/app-state";
import type {WsMessageFromClient} from "./ws-message-from-client";
import {getTrackInfo} from "../orange-bridge/get-track-info";

export async function sendTrackData(
  app_state: AppState,
  request_id: string | null
) {
  const track_info = await getTrackInfo(app_state);

  if (track_info == null) {
    return;
  }

  const msg: WsMessageFromClient = {
    status: 'ok',
    player_track_progress_ms: Spicetify.Player.getProgress(),
    request_id: request_id ?? null,
    data: track_info
  };

  app_state.ws_client.subject?.next(msg);
}
