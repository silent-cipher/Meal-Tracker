import { db } from "./db";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";
dotenv.config();

export const deleteMeal = async (mealId) => {
  const connect = await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  await connection.collection("meals").deleteOne({ _id: new ObjectId(mealId) });
};
