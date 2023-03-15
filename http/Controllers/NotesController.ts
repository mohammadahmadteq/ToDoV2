import { Request, Response } from "express";

class NotesController {
  static async getNotes(req: Request, res: Response) {
    try {
      res.status(200).json({ notes: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getSingleNote(req: Request, res: Response) {
    try {
      res.status(200).json({ notes: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addNotes(req: Request, res: Response) {
    try {
      res.status(200).json({ notes: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async updateNotes(req: Request, res: Response) {
    try {
      res.status(200).json({ notes: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async deleteNotes(req: Request, res: Response) {
    try {
      res.status(200).json({ notes: [] });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default NotesController;
