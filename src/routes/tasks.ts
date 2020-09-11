import express from "express";
const router = express.Router();
import TasksController from "../controllers/tasksController";

router.get("/", async (_, res) => {
  const tasks = await TasksController.all();
  res.json({ tasks });
});

router.post("/new", async (req, res) => {
  const { body } = req;
  const task = await TasksController.create(body.task);
  res.json({ task });
});

router.post("/edit", async (req, res) => {
  const { body } = req;
  const task = await TasksController.edit(body.task);
  res.json({ task });
});

export default router;
