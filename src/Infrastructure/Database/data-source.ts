import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  logging: false,
  entities: ["/Models/*{.ts,.js}"],
  migrations: ["/Migrations/*{.ts,.js}"],
};

export const dataSource = new DataSource(dataSourceOptions);
