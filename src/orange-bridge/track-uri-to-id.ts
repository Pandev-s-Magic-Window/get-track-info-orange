export function trackUriToId(uri: string) {
  return uri.replace("spotify:track:", "");
}
