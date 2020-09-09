const express = require("express");
const router = express.Router();

const tasks = require("./tasks.js");
router.use("/tasks", tasks);

router.use("/", (req, res) => {
  res.json({ hello: "world" });
});

module.exports = router;
