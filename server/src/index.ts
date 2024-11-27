import express, { Application, Request, Response } from "express";
import "dotenv/config";
import Routes from "./routes/index.js";
import { createServer } from "http";
import { Server } from "socket.io";

import cors from "cors";
import { setupSocket } from "./socket.js";
const app: Application = express();
const PORT = process.env.PORT || 7000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

setupSocket(io);
export {io};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working Guys 🙌");
});

app.use("/api", Routes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
