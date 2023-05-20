import { BaseRepository, IBaseRepository } from "./BaseRepository";
import { UserEntity } from "@domain/Entities/UserEntity/UserEntity";
import { User } from "@infrastructure/Database/Models/User";

export interface IUserRepository extends IBaseRepository {}

export class UserRepository extends BaseRepository<UserEntity, User> implements IUserRepository {}
