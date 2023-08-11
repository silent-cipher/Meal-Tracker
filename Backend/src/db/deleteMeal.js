import { ObjectId } from "mongodb";

export const deleteMeal = async (mealId) => {
  const connection = await db.getConnection();
  await connection.collection("meals").deleteOne({ _id: new ObjectId(mealId) });
};
