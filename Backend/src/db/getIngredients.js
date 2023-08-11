export const getIngredients = async () => {
  const connection = await db.getConnection();
  const meals = await connection.collection("ingredients").find({}).toArray();
  //   console.log(meals);

  return meals;
};
