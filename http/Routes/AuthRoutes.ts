import AuthController from "@http/Controllers/AuthController";
import { Router } from "express";

const router = Router();

router.post("/login", AuthController.login);

export default router;
