import express from "express";
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import cors from "cors";
import router from "./routes";

const app = express();

const createDB = async () => {
  return await createConnection();
};

const FRONTEND_HOSTNAME = "http://localhost:3000";
app.use(cors({ origin: FRONTEND_HOSTNAME }));

const PORT: Number = 4000;
const startServer = async () => {
  await app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  // Parses requests with Content-Type: "application/json"
  app.use(express.json());
  app.use("/", router);
};

export let connection: Connection;
(async () => {
  connection = await createDB();
  await startServer();
})();
