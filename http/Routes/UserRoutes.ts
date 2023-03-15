import UsersController from "@http/Controllers/UserController";
import { Router } from "express";

const router = Router();

router.get("/search", UsersController.getUsers);

router.get("/search/:id", UsersController.getSingleUser);

router.post("/add", UsersController.addUsers);

router.put("/update/:id", UsersController.updateUsers);

router.delete("/delete/:id", UsersController.deleteUsers);

export default router;
