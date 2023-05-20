import { TaskEntity } from "@domain/Entities/TaskEntity/TaskEntity";
import { ITaskRepository } from "@infrastructure/MySqlRepository/TasksRepository";
import { GetTaskDTO, PostTaskDTO, UpdateTaskDTO } from "@dto/TaskDTO";

export class TasksService {
  taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  async getAllTasks() {
      const isTasks = await this.taskRepository.fetchAll();

      if(isTasks.length <= 0)
      {
        throw new Error("404 no data found");
      }

      const tasks:TaskEntity[] = [];

      for(const task in isTasks){
          const newTaskEntity: TaskEntity = TaskEntity.create(isTasks[task]);
          tasks.push(newTaskEntity);
      }

      return tasks
  }

  async addNewTask(postTaskDTO : PostTaskDTO) {
    const taskEntity: TaskEntity = TaskEntity.create(postTaskDTO);
    await this.taskRepository.create(taskEntity);
    return taskEntity;
  }

  async deleteTask(taskId: string) {
      await this.taskRepository.remove({
        taskId: taskId
      });

      return;
  }

  async editTask(updateTaskDTO: UpdateTaskDTO) {
    const taskEntity: TaskEntity = TaskEntity.create(updateTaskDTO);
    console.log(taskEntity);
      await this.taskRepository.update({
        taskId: updateTaskDTO.taskId
      }, taskEntity);
      return taskEntity ;
  }
}
