import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getRecipes = async () => {
  const connect = await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  const recipes = await connection.collection("recipes").find({}).toArray();
  //   console.log(meals);

  return recipes;
};
