import { IUserRepository } from "@infrastructure/MySqlRepository/UsersRepository";
import { LoginDTO } from "@dto/LoginDTO";
import * as jwt from "jsonwebtoken"

export class AuthService {
  userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async login(loginDTO: LoginDTO) {
    const credentials = await this.userRepository.fetch({
      username: loginDTO.username,
      password: loginDTO.password,
    });
    if (credentials) {
      jwt.sign()
    }
    return credentials;
  }

  checkDuplicate() {}
}
