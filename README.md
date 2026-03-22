✨ **Part of the Magic Window series**

# Get Track Info
Spicetify extension that emits track changes/data to an external WebSocket server.

## Quick Start
* Just install the extension and start your WebSocket server on port 6603 to start listening for messages.
* To access the settings page, click on your **Profile Icon** > **Get Track Info**.

## Main Features

### ⚙️ Point to any WebSocket server:
Use the extension's default [connection URL](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) (`ws://localhost:6603`) or point to your own URL.

---

### 📡 Set one of two **Emission Modes**:

**Active Mode:**  
Automatically pushes track data to the server whenever there is a track change. This mode is enabled by default.

**Passive Mode:**  
Will not emit automatically/on track change, instead the server has to query for new data by sending a message to the extension.

> [!TIP]
> Send a JSON message with a request ID to easily match requests and responses, like this:<br>
> `{"request_id": "YOUR_REQUEST_ID"}`<br><br>
> E.g. (sending a request with ID from a C# WebSocket server):<br>
> `wsServer.SendAsync(wsClientGuid, "{\"request_id\":\"" + YOUR_ID_HERE + "\"}");`

> [!IMPORTANT]
> Your server message MUST be a valid JSON string, or else your connection will be dropped!<br><br>
> E.g. (sending an empty string from a C# WebSocket server): `wsServer.SendAsync(wsClientGuid, "\"\"");`<br>
> E.g. (sending an empty object from a C# WebSocket server): `wsServer.SendAsync(wsClientGuid, "{}");`

---

### 🔄 Automatic Reconnections:
Once installed, the extension will continuously try to reach your server at 1-second intervals.

> [!TIP]
> If you ever want to stop the extension from reconnecting to your server, you have to explicitly close the connection on the server side.

---

# Sample response
<details>
  <summary>Click here to see a sample response</summary>
  
```
{
  "status": "ok",
  "request_id": "de31a0d4-2105-40cc-a603-6c6a3bf0dfdf",
  "track_id": "185056144973e04c9b21",
  "artist_full": "Bad Bunny, Chuwi",
  "data": {
    "type": "track",
    "uri": "spotify:track:5WEF0icHWmAZBBMglBd599",
    "uid": "185056144973e04c9b21",
    "name": "WELTiTA",
    "mediaType": "audio",
    "duration": {
      "milliseconds": 188000
    },
    "album": {
      "type": "album",
      "uri": "spotify:album:5K79FLRUCSysQnVESLcTdb",
      "name": "DeBÍ TiRAR MáS FOToS",
      "images": [
        {
          "url": "spotify:image:ab67616d00001e02bbd45c8d36e0e045ef640411",
          "label": "standard"
        },
        {
          "url": "spotify:image:ab67616d00004851bbd45c8d36e0e045ef640411",
          "label": "small"
        },
        {
          "url": "spotify:image:ab67616d0000b273bbd45c8d36e0e045ef640411",
          "label": "large"
        },
        {
          "url": "spotify:image:ab67616d0000b273bbd45c8d36e0e045ef640411",
          "label": "xlarge"
        }
      ]
    },
    "artists": [
      {
        "type": "artist",
        "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X",
        "name": "Bad Bunny"
      },
      {
        "type": "artist",
        "uri": "spotify:artist:6wF1Cz760dpdbX9RJIDpQW",
        "name": "Chuwi"
      }
    ],
    "isLocal": false,
    "isExplicit": false,
    "is19PlusOnly": false,
    "hasAssociatedVideo": true,
    "provider": "context",
    "metadata": {
      "canvas.uploadedBy": "artist",
      "image_url": "spotify:image:ab67616d00001e02bbd45c8d36e0e045ef640411",
      "popularity": "88",
      "track_player": "audio",
      "video_association_image_large": "ab6742d3000052b7731d4c53006e50f4caa1da56",
      "video_association_image_xxlarge": "ab6742d3000053b7731d4c53006e50f4caa1da56",
      "collection.in_collection": "false",
      "canvas.entityUri": "spotify:track:5WEF0icHWmAZBBMglBd599",
      "video_association_image_height": "720",
      "album_artist_name": "Bad Bunny",
      "image_small_url": "spotify:image:ab67616d00004851bbd45c8d36e0e045ef640411",
      "artist_uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X",
      "artist_name": "Bad Bunny",
      "album_uri": "spotify:album:5K79FLRUCSysQnVESLcTdb",
      "artist_name:1": "Chuwi",
      "actions.skipping_next_past_track": "resume",
      "context_uri": "spotify:track:5WEF0icHWmAZBBMglBd599",
      "actions.skipping_prev_past_track": "resume",
      "video_association_image_width": "1280",
      "album_track_count": "0",
      "canvas.artist.avatar": "https://open.spotify.com/image/ab6761610000f17881f47f44084e0a09b5f0fa13",
      "video_association_image_height_large": "360",
      "canvas.canvasUri": "spotify:canvas:73WzOHnEh2Xwwc7vAGdKE1",
      "collection.can_add": "true",
      "video_association_image_height_xxlarge": "720",
      "canvas.id": "e816aa309de44a6e9f2514d411cdb961",
      "album_disc_number": "1",
      "canvas.artist.name": "Bad Bunny",
      "video_association_image_width_large": "640",
      "video_association_image": "ab6742d3000053b7731d4c53006e50f4caa1da56",
      "album_track_number": "5",
      "title": "WELTiTA",
      "album_title": "DeBÍ TiRAR MáS FOToS",
      "marked_for_download": "false",
      "view_index": "0",
      "video_association": "spotify:track:7FsBmFUgqVnOOOuiw0cKGL",
      "canvas.url": "https://canvaz.scdn.co/upload/artist/4q3ewBCX7sLwd24euuV69X/video/e816aa309de44a6e9f2514d411cdb961.cnvs.mp4",
      "artist_uri:1": "spotify:artist:6wF1Cz760dpdbX9RJIDpQW",
      "album_disc_count": "1",
      "entity_uri": "spotify:track:5WEF0icHWmAZBBMglBd599",
      "video_association_image_width_xxlarge": "1280",
      "has_lyrics": "true",
      "canvas.explicit": "false",
      "canvas.type": "VIDEO_LOOPING_RANDOM",
      "collection.can_ban": "true",
      "associated_video_id": "0f073102176d49b8bb56b8e3c1a5eb5f",
      "image_xlarge_url": "spotify:image:ab67616d0000b273bbd45c8d36e0e045ef640411",
      "iteration": "0",
      "image_large_url": "spotify:image:ab67616d0000b273bbd45c8d36e0e045ef640411",
      "collection.is_banned": "false",
      "duration": "188000",
      "canvas.artist.uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X",
      "canvas.fileId": "ddf57e463b653a7d80d254fe6267124c"
    },
    "images": [
      {
        "url": "spotify:image:ab67616d00001e02bbd45c8d36e0e045ef640411",
        "label": "standard"
      },
      {
        "url": "spotify:image:ab67616d00004851bbd45c8d36e0e045ef640411",
        "label": "small"
      },
      {
        "url": "spotify:image:ab67616d0000b273bbd45c8d36e0e045ef640411",
        "label": "large"
      },
      {
        "url": "spotify:image:ab67616d0000b273bbd45c8d36e0e045ef640411",
        "label": "xlarge"
      }
    ]
  }
}
```
</details>

---

> [!NOTE]  
> This branch is for **build artifacts only**. If you are looking for the source code, please visit the [main repo.](https://github.com/Pandev-s-Magic-Window/get-track-info-orange)
