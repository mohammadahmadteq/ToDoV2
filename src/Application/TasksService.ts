import { ITaskRepository } from "@infrastructure/MySqlRepository/TasksRepository";
import { GetTaskDTO } from "src/DTO/TaskDTO";

export class TasksService {
  TaskRepository: ITaskRepository;

  constructor(TaskRepository: ITaskRepository) {
    this.TaskRepository = TaskRepository;
  }

  async getTasks() {}

  async addNewTask() {}

  async deleteTask() {}

  async editTask() {}
}
