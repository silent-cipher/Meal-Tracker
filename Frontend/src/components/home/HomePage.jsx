import React from "react";
import { useMeals } from "../meals/useMeals";
import MealsList from "../meals/MealsList";

const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();

  console.log(meals);
  return (
    <div>
      <div>
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
    </div>
  );
};

export default HomePage;
