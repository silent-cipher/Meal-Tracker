import React from "react";
import { useMeals } from "../meals/useMeals";
import { useIngredients } from "../ingredients/useIngredients";
import MealsList from "../meals/MealsList";
import IngredientsList from "../ingredients/IngredientsList";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
  const {
    ingredients,
    isLoading: isLoadingIngredients,
    setIngredients,
  } = useIngredients();

  const onDeleteMeal = async (id) => {
    const response = await fetch(`http://localhost:8080/meals/${id}`, {
      method: "DELETE",
    });

    const updatedMeals = await response.json();
    setMeals(updatedMeals);
  };
  const onDeleteIngredient = async (name) => {
    const response = await fetch(`http://localhost:8080/ingredients/${name}`, {
      method: "DELETE",
    });
    const updatedIngredients = await response.json();
    setIngredients(updatedIngredients);
  };

  console.log(ingredients);
  return (
    <div className="page-container">
      <div className="column">
        <MealsList
          isLoading={isLoadingMeals}
          meals={meals}
          onDelete={onDeleteMeal}
        />
      </div>
      <div className="column">
        <IngredientsList
          isLoading={isLoadingIngredients}
          ingredients={ingredients}
          onDelete={onDeleteIngredient}
        />
        <Link to="/shopping-list" className="link">
          <button className="shopping-list-button list-container full-width">
            Generate Shopping List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
