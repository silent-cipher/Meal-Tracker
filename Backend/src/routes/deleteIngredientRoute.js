import { deleteIngredient } from "../db/deleteIngredient";
import { getIngredients } from "../db/getIngredients";
export const deleteIngredientRoute = {
  method: "delete",
  path: "/ingredients/:name",
  handler: async (req, res) => {
    const { name } = req.params;
    await deleteIngredient(name);
    const updatedIngredients = await getIngredients();
    res.status(200).json(updatedIngredients);
  },
};
