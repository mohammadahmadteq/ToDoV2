import NotesController from "@http/Controllers/NotesController";
import { Router } from "express";

const router = Router();

router.get("/search", NotesController.getNotes);

router.get("/search/:id", NotesController.getSingleNote);

router.post("/add", NotesController.addNotes);

router.put("/update/:id", NotesController.updateNotes);

router.delete("/delete/:id", NotesController.deleteNotes);

export default router;
