export const deleteIngredient = async (ingredientName) => {
  const connection = await db.getConnection();
  await connection
    .collection("ingredients")
    .deleteOne({ name: ingredientName });
};
