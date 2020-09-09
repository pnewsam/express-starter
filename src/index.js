const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}...`);
});

const router = require("./routes");
app.use("/", router);
