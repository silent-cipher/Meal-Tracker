import { db } from "./db";
import dotenv from "dotenv";

dotenv.config();

export const deleteIngredient = async (ingredientName) => {
  const connect = await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  await connection
    .collection("ingredients")
    .deleteOne({ name: ingredientName });
};
