import { Server } from "socket.io";

export function setupSocket(io: Server) {
  io.on("connection", (socket) => {
    console.log("The Socket is connected...", socket.id);

    socket.on("disconnect", () => {
      console.log("The Socket is disconnected...", socket.id);
    });
  });
}
