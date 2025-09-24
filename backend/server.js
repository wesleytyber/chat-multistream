import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Importa integração do Twitch
import { setupTwitch } from "./chats/twitch.js";

dotenv.config();

// Fix para __dirname no ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Servir arquivos estáticos (CSS, JS, imagens, etc)
app.use(express.static(path.join(__dirname, "../frontend")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/index.html"));
});

// Rota donate
app.get("/pages/donate", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/donate.html"));
});

// Rota ads.txt
app.get("/ads.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/ads.txt"));
});

// WebSocket
io.on("connection", (socket) => {
  console.log("✅ Cliente conectado");
  setupTwitch(io, socket); // delega Twitch para módulo separado
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
