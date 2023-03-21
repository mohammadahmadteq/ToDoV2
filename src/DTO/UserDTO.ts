interface IUserDTO {
  userId: string;
  username: string;
  password: string;
}

export class UserDTO implements IUserDTO {
  userId: string;
  username: string;
  password: string;

  constructor(body: IUserDTO) {
    this.userId = body.userId;
    this.username = body.username;
    this.password = body.password;
  }
}
