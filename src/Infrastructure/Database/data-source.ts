import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { Task } from "@infrastructure//Database/Models/Task";
import {User} from "@infrastructure/Database/Models/User";
dotenv.config();

const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  logging: true,
  entities: [Task, User],
  migrations: [__dirname + "/Migrations/*{.ts,.js}"],
  migrationsRun: false

};

export const dataSource = new DataSource(dataSourceOptions);
