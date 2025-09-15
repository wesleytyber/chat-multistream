import WebSocket from "ws";

export function connectKick(channel, onMessage) {
  const ws = new WebSocket("wss://api.kick.com/socket.io/?EIO=3&transport=websocket");

  ws.on("open", () => {
    console.log(`Conectado ao chat da Kick: ${channel}`);
    // precisa adaptar para assinatura de sala do canal
    ws.send(`42["join",{"room":"chatrooms:${channel}"}]`);
  });

  ws.on("message", (data) => {
    try {
      const msg = data.toString();
      if (msg.includes("message")) {
        const payload = JSON.parse(msg.split("42")[1])[1];
        onMessage({
          user: payload.sender.username,
          text: payload.content
        });
      }
    } catch (e) {
      // ignora mensagens que não são do chat
    }
  });
}
