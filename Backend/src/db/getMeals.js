export const getMeals = async () => {
  const connection = await db.getConnection();
  const meals = await connection.collection("meals").find({}).toArray();
  //   console.log(meals);

  return meals;
};
