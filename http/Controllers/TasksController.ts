import { TasksService } from "@application/TasksService";
import { TaskRepository } from "@infrastructure/MySqlRepository/TasksRepository";
import { Request, Response } from "express";

const taskService = new TasksService(new TaskRepository("Tasks"));
class TasksController {
  static async getTasks( req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      res.status(200).json({ body: { tasks: tasks }});
    } catch (error) {
      res.status(500).send(error);
    }
  }


  static async addTasks(req, res) {
    try {
      const {body} = req
      const newTask = await taskService.addNewTask(body)
      res.status(200).json({ body:{ ...newTask} });
      console.log(newTask);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateTasks(req, res) {
    try {
      const {body} = req;
      const updatedTask = await taskService.editTask(body)
      console.log(body)
      res.status(200).json({ body: { ...updatedTask } });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async deleteTasks(req, res) {
    try {
      const taskId = req.params.id;
      await taskService.deleteTask(taskId);
      res.status(200).send("success");
      console.log(req.params);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default TasksController;
