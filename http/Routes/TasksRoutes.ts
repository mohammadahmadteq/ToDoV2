import TasksController from "@http/Controllers/TasksController";
import { Router } from "express";

const router = Router();

router.get("/search", TasksController.getTasks);

router.get("/search/:id", TasksController.getSingleNote);

router.post("/add", TasksController.addTasks);

router.put("/update/:id", TasksController.updateTasks);

router.delete("/delete/:id", TasksController.deleteTasks);

export default router;
