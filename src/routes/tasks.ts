import express from "express";
const router = express.Router();

interface Task {
  text: string;
}

let tasks: Task[] = [];

router.get("/", (req, res) => {
  res.json({ youHave: "arrived!" });
});

router.post("/new", (req, res) => {
  console.log({ body: req.body, params: req.params });
  const { task } = req.body;
  tasks.push(task);
  res.json({ tasks });
});

export default router;
