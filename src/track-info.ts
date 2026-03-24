import type {TrackInfoFromGraphql} from "./orange-bridge/track-info-from-graphql";

export class TrackInfo {
  private static unknown_artist_name = "UNKNOWN_ARTIST_NAME";

  constructor(
    public track_id: string,
    public track_name: string,
    public track_duration_ms: number,
    public track_is_explicit: boolean,
    public album_id: string,
    public album_name: string,
    public artist_name: string,
    public artist_full_name: string,
    public extra_data?: unknown
  ) {
  }

  static create(
    player_track: Spicetify.PlayerTrack,
    track_data_from_graphql: TrackInfoFromGraphql | null,
    include_extra_data = false,
  ): TrackInfo {
    const track_id = player_track?.metadata?.audio_association ?? player_track.uri;
    const artists = player_track.artists;

    let main_artist = TrackInfo.unknown_artist_name;
    if (track_data_from_graphql != null) {
      main_artist = track_data_from_graphql.artist_name;
    } else if (artists != null && artists.length > 0) {
      console.log(artists)
      main_artist = artists.shift()?.name ?? TrackInfo.unknown_artist_name;
    }

    let artist_full;
    if (track_data_from_graphql != null) {
      artist_full = track_data_from_graphql.artist_full;
    } else {
      const other_artists = player_track.artists
        ?.filter((artist) => artist != null)
        ?.map((artist) => artist.name) ?? [];

      artist_full = [...[main_artist], ...other_artists]
        .filter((artist) => artist != null)
        .join(", ");
    }

    let album_id;
    if (track_data_from_graphql != null) {
      album_id = track_data_from_graphql.album_id;
    } else {
      album_id = player_track?.album?.uri ?? "UNKNOWN_ALBUM_ID"
    }

    let album_name;
    if (track_data_from_graphql != null) {
      album_name = track_data_from_graphql.album_name;
    } else {
      album_name = player_track?.album?.name ?? "UNKNOWN_ALBUM_NAME"
    }

    return new TrackInfo(
      track_id.replace("spotify:track:", ""),
      player_track?.name ?? "UNKNOWN_TRACK_NAME",
      player_track?.duration?.milliseconds ?? -1,
      player_track?.isExplicit ?? false,
      album_id.replace("spotify:album:", ""),
      album_name,
      main_artist,
      artist_full,
      include_extra_data ? player_track : undefined
    )
  }
}
