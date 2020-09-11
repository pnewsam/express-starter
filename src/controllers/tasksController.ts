import { connection } from "../index";
import { Task } from "../entities/task";

interface TaskInput {
  id?: string;
  text: string;
  completed: boolean;
}

class TasksController {
  static async repository() {
    return await connection.getRepository(Task);
  }

  static async all() {
    const repo = await this.repository();
    return await repo.find();
  }

  static async create(input: TaskInput) {
    const repo = await this.repository();
    const task = new Task();
    task.text = input.text;
    return await repo.save(task);
  }

  static async edit(input: TaskInput) {
    const repo = await this.repository();
    const task: Task | undefined = await repo.findOne(input.id);
    if (task) {
      task.text = input.text;
      task.completed = input.completed;
      return await repo.save(task);
    }
  }
}

export default TasksController;
