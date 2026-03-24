import {parseArgs} from "util";

const now_formatted = () => {
  const date = new Date();
  return date.toISOString().replace("T"," ").substring(0, 19);
}

const {values} = parseArgs({
  args: Bun.argv,
  options: {
    port: {
      type: "string",
      required: true,
    }
  },
  strict: true,
  allowPositionals: true,
});

const port = parseInt(values.port ?? "0");
if (port <= 0 || Number.isNaN(port)) {
  console.log(`Invalid port number! Parsed Port=${port}`);
  process.exit(1);
}

Bun.serve({
  port,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", {status: 500});
  },
  websocket: {
    open: (ws) => {
      ws.send(JSON.stringify({
        request_id: `{"[${now_formatted()}] Hello there!}`,
      }))
    },
    message: (ws, message) => {
      console.log(`[${now_formatted()}] Received message:`, message);
    }
  }
});

console.log(`[${now_formatted()}] Test WebSocket server listening on port ${port}`);
