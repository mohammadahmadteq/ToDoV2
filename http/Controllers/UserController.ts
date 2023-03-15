import { Request, Response } from "express";

class UsersController {
  static async getUsers(req: Request, res: Response) {
    try {
      res.status(200).json({ Users: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getSingleUser(req: Request, res: Response) {
    try {
      res.status(200).json({ Users: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addUsers(req: Request, res: Response) {
    try {
      res.status(200).json({ Users: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateUsers(req: Request, res: Response) {
    try {
      res.status(200).json({ Users: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async deleteUsers(req: Request, res: Response) {
    try {
      res.status(200).json({ Users: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default UsersController;
