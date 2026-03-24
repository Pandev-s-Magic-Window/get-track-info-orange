import type {TrackInfo} from "../track-info";

export interface WsMessageFromClient {
  status: 'ok' | 'error';
  player_track_progress_ms: number;
  request_id: string | null;
  data: TrackInfo
}
