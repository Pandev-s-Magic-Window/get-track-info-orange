export function getCurrentPlayerPlayerTrack(): Spicetify.PlayerTrack | null {
  const player_track = Spicetify.Player.data?.item;
  return player_track != null ? player_track : null;
}
