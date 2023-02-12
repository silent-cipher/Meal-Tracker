import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const insertMeal = async (meal) => {
  const connect = await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  await connection.collection("meals").insertOne(meal);
};
