import { BaseRepository, IBaseRepository } from "./BaseRepository";
import { TaskEntity } from "@domain/Entities/TaskEntity/TaskEntity";
import { Task } from "@infrastructure/Database/Models/Task";

export interface ITaskRepository extends IBaseRepository {}

export class TaskRepository extends BaseRepository<TaskEntity, Task> implements ITaskRepository {}
