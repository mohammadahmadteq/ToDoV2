import express, { json, urlencoded } from "express";
import Routes from "@http/Routes/index";
import { dataSource } from "@infrastructure/Database/data-source";
const TodoApi = express();

const starter = async () => {
  try {
    await dataSource.initialize();
  } catch (e) {
    console.log(e);
  }
};

TodoApi.use(urlencoded({ extended: true }));
TodoApi.use(json());
TodoApi.use("/tasks", Routes.TasksRoutes);
TodoApi.use("/user", Routes.UserRoutes);
TodoApi.use("/auth", Routes.AuthRoutes);
dataSource.initialize();
TodoApi.listen(8000);

starter();

export default TodoApi;
