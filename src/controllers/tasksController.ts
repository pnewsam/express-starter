import { connection } from "../index";
import { Task } from "../entities/task";

interface TaskInput {
  text: string;
}

class TasksController {
  static async createTask(input: TaskInput) {
    const task = new Task();
    const repo = await connection.getRepository(Task);
    task.text = input.text;
    return await repo.save(task);
  }
}

export default TasksController;
