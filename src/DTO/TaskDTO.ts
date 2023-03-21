interface ITaskDTO {
  taskId: string;
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  isFinished: boolean;
}

export class TaskDTO implements ITaskDTO {
  taskId: string;
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  isFinished: boolean;

  constructor(body: ITaskDTO) {
    this.taskBody = body.taskBody;
    this.taskHeading = body.taskHeading;
    this.isFinished = body.isFinished;
    this.taskId = body.taskId;
    this.taskBody = body.taskBody;
  }
}
