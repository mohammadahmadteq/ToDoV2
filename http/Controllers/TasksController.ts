import { TasksService } from "@application/TasksService";
import { TaskRepository } from "@infrastructure/MySqlRepository/TasksRepository";
import { Request, Response } from "express";

const taskService = new TasksService(new TaskRepository("tasks"));
class TasksController {
  static async getTasks(req: Request, res: Response) {
    try {
      const tasks = await taskService.getTasks();
      console.log(tasks);
      res.status(200).json({ tasks: tasks });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getSingleNote(req: Request, res: Response) {
    try {
      res.status(200).json({ date: "22/03/23" });
      console.log(req.params);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addTasks(req: Request, res: Response) {
    try {
      res.status(200).json({ tasks: [] });
      console.log(req.params);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateTasks(req: Request, res: Response) {
    try {
      res.status(200).json({ tasks: [] });
      console.log(req.params);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async deleteTasks(req: Request, res: Response) {
    try {
      res.status(200).send("success");
      console.log(req.params);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default TasksController;
