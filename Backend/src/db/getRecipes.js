export const getRecipes = async () => {
  const connection = await db.getConnection();
  const recipes = await connection.collection("recipes").find({}).toArray();
  //   console.log(meals);

  return recipes;
};
