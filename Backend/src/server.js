import express from "express";
import { routes } from "./routes";
import { db } from "./db/db";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// body-parser can also be used instead of below two lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

routes.forEach((route) => app[route.method](route.path, route.handler));

const start = async () => {
  await db.connect(process.env.MONGODB_URL);
  app.listen(8080, () => {
    console.log("Server is listening on Port 8080");
  });
};
start();
