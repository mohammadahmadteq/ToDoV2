import { AuthService } from "@application/AuthService";
import { LoginDTO } from "@dto/LoginDTO";
import { UserRepository } from "@infrastructure/MySqlRepository/UsersRepository";
import { Request, Response } from "express";

const authService = new AuthService(new UserRepository("users"));

class UsersController {
  static async login(req, res) {
    const loginDTO: LoginDTO = new LoginDTO({
      username: req.body.username,
      password: req.body.password,
    });
    try {
      const login = await authService.login(loginDTO);
      console.log(req);
      res.status(200).json({ login: { ...login } });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default UsersController;
