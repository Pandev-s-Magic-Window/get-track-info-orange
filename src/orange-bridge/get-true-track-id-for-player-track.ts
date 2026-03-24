import {trackUriToId} from "./track-uri-to-id";

export function getTrueTrackIdForPlayerTrack(track_data: Spicetify.PlayerTrack) {
  const original_track_id = trackUriToId(track_data.uri);

  // Only apply this whole logic for videos
  if (track_data.mediaType !== 'video') {
    //return original_id;
  }

  const audio_association_uri = track_data?.metadata?.audio_association;
  if (audio_association_uri == null) {
    return original_track_id;
  }

  if (audio_association_uri.includes(original_track_id)) {
    return original_track_id;
  }

  return audio_association_uri
    .replace("spotify:track:", "");
}
