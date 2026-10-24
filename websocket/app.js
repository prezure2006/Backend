import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
const app = express();
const PORT = 4000;
const server = http.createServer(app);
const io = new Server(server);
//IO things will be handeled here
io.on("connection", (socket) => {
  socket.on("userMessage", (message) => {
    io.emit("message", message);
  });
});
app.use(express.static("/public"));
app.get("/", (req, res) => {
  return res.sendFile(path.resolve("./public/index.html"));
});
server.listen(PORT, (res, req) => {
  console.log("Server Started at PORT no ", PORT);
});
