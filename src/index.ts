import express from "express";
const app = express();
import "reflect-metadata";

const PORT: Number = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}...`);
});

// Parses json in requests with Content-Type:application/json
app.use(express.json());

const router = require("./routes");
app.use("/", router);
