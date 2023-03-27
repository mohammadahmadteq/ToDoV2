interface IUserDTO {
  userId?: string;
  username: string;
  password: string;
}

export class GetUserDTO implements IUserDTO {
  userId: string;
  username: string;
  password: string;

  constructor(body: IUserDTO) {
    this.userId = body.userId;
    this.username = body.username;
    this.password = body.password;
  }
}

export class PostUserDTO implements IUserDTO {
  username: string;
  password: string;

  constructor(body: IUserDTO) {
    this.username = body.username;
    this.password = body.password;
  }
}
