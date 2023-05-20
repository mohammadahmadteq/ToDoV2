import { entityIdGenerator } from "src/Utils/sharedUtils";

export interface ITaskEntity {
  taskId?: string;
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  finishedAt?: string;
}

export class TaskEntity implements ITaskEntity {
  taskId: string;
  taskHeading: string;
  taskBody: string;  dueDate: string;
  finishedAt: string;

  constructor(taskEntity: ITaskEntity) {
    this.taskId = taskEntity?.taskId ? taskEntity.taskId : entityIdGenerator();
    this.taskHeading = taskEntity.taskHeading;
    this.dueDate = taskEntity.dueDate;
    this.taskBody = taskEntity.taskBody;
    this.finishedAt = taskEntity.finishedAt ? taskEntity.finishedAt : null;
  }

  static create(taskEntity: ITaskEntity): TaskEntity {
    return new TaskEntity(taskEntity);
  }
}
