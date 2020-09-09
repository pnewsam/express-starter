import express from "express";
const router = express.Router();

import tasks from "./tasks";
router.use("/tasks", tasks);

router.use("/", (_: express.Request, res: express.Response) => {
  res.json({ hello: "world" });
});

module.exports = router;
