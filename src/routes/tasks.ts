import express from "express";
const router = express.Router();
import TasksController from "../controllers/tasksController";

router.get("/", (req, res) => {
  res.json({ youHave: "arrived!" });
});

router.post("/new", async (req, res) => {
  const { body } = req;
  const newTask = await TasksController.createTask(body.task);
  res.json({ newTask });
});

export default router;
