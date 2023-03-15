import NotesController from "@http/Controllers/NotesController";
import { Router } from "express";

const router = Router();

router.get("/search", NotesController.getNotes);

router.post("/add", (req, res) => {
  console.log(req);

  res.send("added");
});

export default router;
