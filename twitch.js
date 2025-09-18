// import tmi from "tmi.js";

// export function connectTwitch(channel, onMessage) {
//   const client = new tmi.Client({
//     connection: { reconnect: true },
//     channels: [channel]
//   });

//   client.connect();

//   client.on("message", (ch, tags, message) => {
//     onMessage({
//       user: tags["display-name"],
//       text: message
//     });
//   });
// }
