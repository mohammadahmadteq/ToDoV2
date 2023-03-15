import express, { urlencoded } from "express";
import Routes from "@http/Routes/index";

const TodoAPi = express();

TodoAPi.use(urlencoded({ extended: true }));
TodoAPi.use("/notes", Routes.NotesRoutes);

TodoAPi.listen(8000);

export default TodoAPi;
