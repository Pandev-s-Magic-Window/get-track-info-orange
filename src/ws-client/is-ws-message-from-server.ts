import type {WsMessageFromServer} from "./ws-message-from-server";

export function isWsMessageFromServer(data: unknown): data is WsMessageFromServer {
  return (data as WsMessageFromServer).request_id !== undefined;
}
