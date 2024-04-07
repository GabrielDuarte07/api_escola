import "reflect-metadata";
import "express-async-errors";
import dataSource from "@config/db";
//import express from "express";

//const app = express();

dataSource
  .initialize()
  .then(() => {
    console.log(`app running on port ${process.env.APP_PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
