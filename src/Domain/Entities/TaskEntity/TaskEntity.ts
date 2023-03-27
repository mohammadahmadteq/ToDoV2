export interface ITaskEntity {
  taskId: string;
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  isFinished: boolean;
}

export class TaskEntity implements ITaskEntity {
  taskId: string;
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  isFinished: boolean;

  constructor(taskEntity: ITaskEntity) {
    this.taskId = taskEntity.taskId;
    this.taskHeading = taskEntity.taskHeading;
    this.dueDate = taskEntity.dueDate;
    this.taskBody = taskEntity.taskBody;
    this.isFinished = taskEntity.isFinished;
  }

  static create(taskEntity): TaskEntity {
    return new TaskEntity(taskEntity);
  }
}
