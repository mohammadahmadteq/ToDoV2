interface ITaskDTO {
  taskId: string;
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  finishedAt: string;
}


type IGetTaskDTO = Partial<Pick<ITaskDTO, "taskHeading" | "taskBody" | "dueDate" | "finishedAt">>
type IPostTaskDTO = Pick<ITaskDTO, "taskHeading" | "taskBody" | "dueDate">
type IUpdateTaskDTO = Pick<ITaskDTO, "taskId" | Partial<"taskHeading" | "taskBody" | "dueDate" | "finishedAt">>
export class GetTaskDTO implements IGetTaskDTO {
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  finishedAt: string;

  constructor(body: ITaskDTO) {
    this.taskBody = body.taskBody;
    this.taskHeading = body.taskHeading;
    this.finishedAt = body.finishedAt;
    this.dueDate = body.dueDate
  }
}
export class PostTaskDTO implements IPostTaskDTO {
  taskHeading: string;
  taskBody: string;
  dueDate: string;

  constructor(body: ITaskDTO) {
    this.taskBody = body.taskBody;
    this.taskHeading = body.taskHeading;
    this.dueDate = body.dueDate;
  }
}

export class UpdateTaskDTO implements IUpdateTaskDTO {
  taskHeading: string;
  taskBody: string;
  dueDate: string;
  finishedAt: string;
  taskId: string;

  constructor(body: ITaskDTO) {
    this.taskBody = body.taskBody;
    this.taskHeading = body.taskHeading;
    this.finishedAt = body.finishedAt;
    this.taskBody = body.taskBody;
    this.taskId = body.taskId;
  }
}