import { getPopulatedMeals } from "../db/getPopulatedMeals";
import { deleteMeal } from "../db/deleteMeal";

export const deleteMealRoute = {
  method: "delete",
  path: "/meals/:id",
  handler: async (req, res) => {
    const { id } = req.params;
    await deleteMeal(id);
    const updatedMeals = await getPopulatedMeals();
    res.status(200).json(updatedMeals);
  },
};
