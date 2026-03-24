import {getCurrentPlayerPlayerTrack} from "./get-current-track";
import type {TrackInfoFromGraphql} from "./track-info-from-graphql";
import {getTrueTrackIdForPlayerTrack} from "./get-true-track-id-for-player-track";
import {getTrackInfoFromGraphql} from "./get-track-info-from-graphql";
import {TrackInfo} from "../track-info";
import type {AppState} from "../app/app-state";
import {trackUriToId} from "./track-uri-to-id";

export async function getTrackInfo(app_state: AppState): Promise<TrackInfo | null> {
  const player_track = getCurrentPlayerPlayerTrack();
  if (player_track == null) {
    return null;
  }

  const original_track_id = trackUriToId(player_track.uri);
  const true_track_id = getTrueTrackIdForPlayerTrack(player_track);

  const cached_track_info = app_state.track_info_cache.get(true_track_id);
  if (cached_track_info != null) {
    return cached_track_info;
  }

  let track_info_from_graphql: TrackInfoFromGraphql | null = null;

  // An example of a mismatch is when you are playing a track as a video
  const id_mismatch = original_track_id !== true_track_id;
  const include_extra_data = app_state.include_extra_data_f.value === 'yes';
  if (id_mismatch || include_extra_data) {
    track_info_from_graphql = await getTrackInfoFromGraphql(app_state, true_track_id, player_track);
  }

  const track_info = TrackInfo.create(
    player_track,
    track_info_from_graphql,
    include_extra_data
  );

  if (!include_extra_data) {
    track_info.extra_data = undefined;
  }

  app_state.track_info_cache.set(true_track_id, track_info);

  return track_info;
}
