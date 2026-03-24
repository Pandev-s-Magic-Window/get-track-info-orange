import type {AppState} from "../app/app-state";
import {assert} from "typia";
import type {TrackInfoFromGraphql} from "./track-info-from-graphql";

type ArtistEntity = {
  profile: { name: string }
};
type ArtistEntityList = Array<ArtistEntity>;

type GraphQLResponse = {
  data: {
    trackUnion: {
      albumOfTrack: { id: string, name: string },
      firstArtist: { items: ArtistEntityList },
      otherArtists: { items: ArtistEntityList }
    }
  }
};

export async function getTrackInfoFromGraphql(
  app_state: AppState,
  track_id: string,
  track_data: Spicetify.PlayerTrack
): Promise<TrackInfoFromGraphql | null> {

  // If we are here it means the original track was probably a video,
  // so we need to fetch the data for the actual track
  try {
    const raw_res = await Spicetify.GraphQL.Request(
      {
        name: "getTrack",
        operation: "query",
        sha256Hash: "612585ae06ba435ad26369870deaae23b5c8800a256cd8a57e08eddc25a37294",
        value: null,
      },
      {
        uri: `spotify:track:${track_id}`
      }
    );

    const res = assert<GraphQLResponse>(raw_res);

    let main_artist = res.data.trackUnion.firstArtist.items.shift()?.profile.name;
    if (main_artist == null) {
      main_artist = track_data.artists?.shift()?.name ?? "UNKNOWN_ARTIST_NAME";
    }

    const artist_full_list = [
      ...[main_artist],
      ...res.data.trackUnion.otherArtists.items.map((artist) => artist.profile.name)
    ].filter((artist) => artist != null);

    return {
      track_id,

      album_id: res.data.trackUnion.albumOfTrack.id,
      album_name: res.data.trackUnion.albumOfTrack.name,

      artist_name: main_artist,
      artist_full: artist_full_list.join(", ")
    }
  } catch (e) {
    app_state.logger("Tried to get enhanced track data from URL but failed (using original data now): ", e)
  }

  return null;
}
