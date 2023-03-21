import express, { urlencoded } from "express";
import Routes from "@http/Routes/index";
import { dataSource } from "@infrastructure/Database/data-source";
const TodoApi = express();

TodoApi.use(urlencoded({ extended: true }));
TodoApi.use("/tasks", Routes.TasksRoutes);
TodoApi.use("/user", Routes.UserRoutes);
dataSource.initialize();
TodoApi.listen(8000);

export default TodoApi;
