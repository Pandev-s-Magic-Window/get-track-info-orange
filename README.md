✨ **Part of the Magic Window series**

# The Orange Emitter
Spicetify extension that emits track changes/data to an external WebSocket server.

## Quck Start
* Just install the extension and start your WebSocket server on port 6603 to start listening for messages.
* To access the settings page, click on your **Profile Icon** > **Magic Window: The Orange Emitter**.
<br>

## Main Features

### ⚙️ Point to any WebSocket server:
Use the extension's default [connection URL](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) (`ws://localhost:6603`) or point to your own URL.

---

### 📡 Set one of two **Emission Modes**:
**Active Mode:**
<br>
Automatically pushes track data to the server whenever there is a track change. This mode is enabled by default.
<br><br>
**Passive Mode:**<br>
Will not emit automatically/on track change, instead the server has to query for new data by sending a message to the extension.

> [!TIP]
> The server message can contain any data or be empty.

---

### 🔄 Automatic Reconnections:
Once installed, the extension will continuously try to reach your server at 1-second intervals.

> [!TIP]
> If you evenr want to stop the extension from reconnecting to your server, you have to explicitly close the connection on the server side.

---
<br>

> [!NOTE]  
> This branch is for **build artifacts only**. If you are looking for the source code, please visit the [main repo.](https://github.com/Pandev-s-Magic-Window/orange-emitter)
