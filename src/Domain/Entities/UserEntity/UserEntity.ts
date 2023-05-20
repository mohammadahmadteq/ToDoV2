export interface IUserEntity {
  username: string;
  password: string;
  userId: string;
}

export class UserEntity implements IUserEntity {
  userId: string;
  password: string;
  username: string;

  constructor(userEntity: IUserEntity) {
    this.password = userEntity.password;
    this.userId = userEntity.userId;
    this.username = userEntity.username;
  }

  static create(userEntity): UserEntity {
    return new UserEntity(userEntity);
  }
}
