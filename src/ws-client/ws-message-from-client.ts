export interface WsMessageFromClient {
  status: 'ok' | 'error';
  request_id: string | null;
  track_id: string;
  artist_full: string;
  data: Spicetify.PlayerTrack
}
