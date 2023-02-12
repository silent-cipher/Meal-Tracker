import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const searchRecipes = async (searchString) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  const meals = await connection
    .collection("recipes")
    .find({ $text: { $search: searchString } })
    .toArray();
  return meals;
};
