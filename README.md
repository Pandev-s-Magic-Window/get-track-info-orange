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
  "request_id": "e1c1434e-cc68-4368-9dba-2dd84e4c5e05",
  "track_id": "dac674b1bb02a9c3eb96",
  "artist_full": "Bad Bunny, The Marías",
  "data": {
    "type": "track",
    "uri": "spotify:track:0E0DRHf5PfMeor0ZCwB3oT",
    "uid": "dac674b1bb02a9c3eb96",
    "name": "Otro Atardecer",
    "mediaType": "audio",
    "duration": {
      "milliseconds": 244000
    },
    "album": {
      "type": "album",
      "uri": "spotify:album:3RQQmkQEvNCY4prGKE6oc5",
      "name": "Un Verano Sin Ti",
      "images": [
        {
          "url": "spotify:image:ab67616d00001e0249d694203245f241a1bcaa72",
          "label": "standard"
        },
        {
          "url": "spotify:image:ab67616d0000485149d694203245f241a1bcaa72",
          "label": "small"
        },
        {
          "url": "spotify:image:ab67616d0000b27349d694203245f241a1bcaa72",
          "label": "large"
        },
        {
          "url": "spotify:image:ab67616d0000b27349d694203245f241a1bcaa72",
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
        "uri": "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
        "name": "The Marías"
      }
    ],
    "isLocal": false,
    "isExplicit": false,
    "is19PlusOnly": false,
    "hasAssociatedVideo": false,
    "provider": "context",
    "metadata": {
      "context_uri": "spotify:track:0E0DRHf5PfMeor0ZCwB3oT",
      "artist_name": "Bad Bunny",
      "canvas.artist.uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X",
      "album_track_number": "17",
      "canvas.id": "f331f98c9f3c41f8ab48189596ad6784",
      "has_lyrics": "true",
      "track_player": "audio",
      "canvas.uploadedBy": "artist",
      "collection.can_add": "true",
      "iteration": "0",
      "canvas.url": "https://canvaz.scdn.co/upload/artist/4q3ewBCX7sLwd24euuV69X/video/f331f98c9f3c41f8ab48189596ad6784.cnvs.mp4",
      "collection.can_ban": "true",
      "album_uri": "spotify:album:3RQQmkQEvNCY4prGKE6oc5",
      "album_disc_number": "1",
      "canvas.entityUri": "spotify:track:0E0DRHf5PfMeor0ZCwB3oT",
      "album_artist_name": "Bad Bunny",
      "actions.skipping_prev_past_track": "resume",
      "entity_uri": "spotify:track:0E0DRHf5PfMeor0ZCwB3oT",
      "canvas.canvasUri": "spotify:canvas:7oTYo4VjzqTbov0JzFkl1y",
      "title": "Otro Atardecer",
      "album_track_count": "0",
      "album_title": "Un Verano Sin Ti",
      "canvas.artist.name": "Bad Bunny",
      "view_index": "0",
      "artist_uri:1": "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
      "artist_uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X",
      "marked_for_download": "false",
      "canvas.explicit": "false",
      "popularity": "83",
      "canvas.fileId": "21250daac04b315a96e0afddea25e5d7",
      "image_large_url": "spotify:image:ab67616d0000b27349d694203245f241a1bcaa72",
      "canvas.artist.avatar": "https://open.spotify.com/image/ab6761610000f17881f47f44084e0a09b5f0fa13",
      "canvas.type": "VIDEO_LOOPING_RANDOM",
      "image_url": "spotify:image:ab67616d00001e0249d694203245f241a1bcaa72",
      "duration": "244000",
      "image_small_url": "spotify:image:ab67616d0000485149d694203245f241a1bcaa72",
      "collection.in_collection": "false",
      "artist_name:1": "The Marías",
      "collection.is_banned": "false",
      "actions.skipping_next_past_track": "resume",
      "image_xlarge_url": "spotify:image:ab67616d0000b27349d694203245f241a1bcaa72",
      "album_disc_count": "1"
    },
    "images": [
      {
        "url": "spotify:image:ab67616d00001e0249d694203245f241a1bcaa72",
        "label": "standard"
      },
      {
        "url": "spotify:image:ab67616d0000485149d694203245f241a1bcaa72",
        "label": "small"
      },
      {
        "url": "spotify:image:ab67616d0000b27349d694203245f241a1bcaa72",
        "label": "large"
      },
      {
        "url": "spotify:image:ab67616d0000b27349d694203245f241a1bcaa72",
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
