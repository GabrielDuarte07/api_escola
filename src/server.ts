import "reflect-metadata";
import "express-async-errors";
import dataSource from "@config/db";
import express from "express";
import mainRoutes from "./index.routes";
import { Request, Response, NextFunction } from "express";
import AppError from "@error/AppError";

const app = express();
app.use(express.json());
app.use(mainRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.code).json(err);
    return;
  }
  next(err);
});

dataSource
  .initialize()
  .then(() => {
    console.log(`app running on port ${process.env.APP_PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
