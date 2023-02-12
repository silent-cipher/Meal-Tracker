import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getMeals = async () => {
  const connect = await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  const meals = await connection.collection("meals").find({}).toArray();
  //   console.log(meals);

  return meals;
};
