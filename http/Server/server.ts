import express, { urlencoded } from "express";
import Routes from "@http/Routes/index";

const TodoApi = express();

TodoApi.use(urlencoded({ extended: true }));
TodoApi.use("/notes", Routes.NotesRoutes);
TodoApi.use("/user", Routes.UserRoutes);

TodoApi.listen(8000);

export default TodoApi;
