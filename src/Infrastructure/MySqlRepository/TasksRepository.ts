import { BaseRepository, IBaseRepository } from "./BaseRepository";
import { TaskEntity } from "@domain/Entities/TaskEntity/TaskEntity";
import { TaskDBModel } from "@infrastructure/Database/Models/TodoModel";

export interface ITaskRepository extends IBaseRepository {}

export class TaskRepository extends BaseRepository<TaskEntity, TaskDBModel> implements ITaskRepository {}
