import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import tmi from 'tmi.js';
import { fileURLToPath } from 'url';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.static('public'));

let twitchClient;

io.on('connection', (socket) => {
  console.log('Front-end conectado');

  socket.on('join-channel', (channel) => {
    console.log('Conectando ao canal Twitch:', channel);

    // desconecta cliente antigo
    if (twitchClient) {
      twitchClient.disconnect();
    }

    // cria novo cliente
    twitchClient = new tmi.Client({
      connection: { reconnect: true },
      channels: [channel]
    });

    twitchClient.connect();

    twitchClient.on('message', (channelName, tags, message, self) => {
      if (self) return;

      const displayName = tags['display-name'] || tags.username || 'Anon';
      const badges = tags.badges || {};

      const badgeIcons = [];
      if (badges.broadcaster) badgeIcons.push('<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1" alt="broadcaster">');
      if (badges.moderator) badgeIcons.push('<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1" alt="mod">');
      if (badges.vip) badgeIcons.push('<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1" alt="vip">');
      if (badges.subscriber) badgeIcons.push('<img class="badge" src="	https://static-cdn.jtvnw.net/badges/v1/511b78a9-ab37-472f-9569-457753bbe7d3/1" alt="subscriber">');
      if (badges.prime) badgeIcons.push('<img class="badge" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1" alt="prime">');

      socket.emit('new-message', {
        user: displayName,
        message,
        badges: badgeIcons,
        color: tags.color || '#FFFFFF'
      });
    });
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

// import express from 'express';
// import http from 'http';
// import { Server } from 'socket.io';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: '*' } });

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Simula mensagem da Kick a cada 15s
// setInterval(() => {
//   const msg = {
//     user: 'KickSim',
//     message: 'Mensagem simulada da Kick!',
//     avatar: 'https://i.imgur.com/Exemplo.png',
//     badges: [
//       { text: 'Moderator', type: 'moderator' },
//       { text: 'Subscriber', type: 'subscriber', count: 2 }
//     ],
//     usernameColor: '#FF5733',
//     createdAt: new Date().toISOString()
//   };
//   io.emit('chatMessage', msg);
// }, 1000);

// // Endpoint para simular mensagens via POST (como se fosse o Webhook real)
// app.post('/kick-webhook', (req, res) => {
//   const p = req.body;
//   const message = {
//     user: p.sender.username,
//     message: p.content,
//     avatar: p.sender.profile_picture || 'https://i.imgur.com/Exemplo.png',
//     badges: p.sender.identity?.badges || [],
//     usernameColor: p.sender.identity?.username_color || '#FFFFFF',
//     createdAt: p.created_at
//   };
//   io.emit('chatMessage', message);
//   res.sendStatus(200);
// });

// // Socket.IO
// io.on('connection', (socket) => {
//   console.log('Cliente conectado:', socket.id);
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });
