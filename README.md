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
> Send a JSON message with a request ID to easily match requests and responses, like this: `{"request_id": "YOUR_REQUEST_ID"}`<br>
> E.g. (sending a request with ID from a C# WebSocket server):<br>
> `wsServer.SendAsync(wsClientGuid, "{\"request_id\":\"" + YOUR_ID_HERE + "\"}");`

> [!IMPORTANT]
> Your server message MUST be a valid JSON string, or else your connection will be dropped!<br>
> E.g. (sending an empty string from a C# WebSocket server): `wsServer.SendAsync(wsClientGuid, "\"\"");`<br>
> E.g. (sending an empty object from a C# WebSocket server): `wsServer.SendAsync(wsClientGuid, "{}");`

---

### 🔄 Automatic Reconnections:
Once installed, the extension will continuously try to reach your server at 1-second intervals.

> [!TIP]
> If you ever want to stop the extension from reconnecting to your server, you have to explicitly close the connection on the server side.

---

> [!NOTE]  
> This branch is for **build artifacts only**. If you are looking for the source code, please visit the [main repo.](https://github.com/Pandev-s-Magic-Window/get-track-info-orange)
