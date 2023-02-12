import { getIngredients } from "../db/getIngredients";
export const getIngredientsRoute = {
  method: "get",
  path: "/ingredients",
  handler: async (req, res) => {
    const ingredients = await getIngredients();
    res.status(200).json(ingredients);
  },
};
