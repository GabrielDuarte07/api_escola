import "dotenv/config";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  host: process.env.HOST,
  type: process.env.DB as "postgres",
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  port: Number(process.env.DB_POST),
  database: process.env.DB_NAME,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/modules/**/migrations/*.ts"],
});

export default dataSource;
