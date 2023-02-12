import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const insertIngredient = async (ingredient) => {
  const connect = await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  await connection.collection("ingredients").insertOne(ingredient);
};
