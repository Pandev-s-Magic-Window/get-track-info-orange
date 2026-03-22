import type {AppState} from "../app/app-state";
import type {WsMessageFromClient} from "./ws-message-from-client";

export function sendTrackData(app_state: AppState, request_id: string | null) {
  const track_data = Spicetify.Player.data?.item;
  if (track_data == null) {
    return;
  }
  const artist_full = track_data.artists
    ?.map((artist) => artist.name)
    .join(", ") ?? "";

  const msg: WsMessageFromClient = {
    status: 'ok',
    request_id: request_id ?? null,
    track_id: track_data.uid,
    artist_full,
    data: track_data,
  };
  //console.log(msg);

  app_state.ws_client.subject?.next(msg);
}
