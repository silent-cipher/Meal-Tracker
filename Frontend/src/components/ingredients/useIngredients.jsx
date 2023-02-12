import { useState, useEffect } from "react";

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch("http://localhost:8080/ingredients");
      const ingredientsResponse = await response.json();
      setIngredients(ingredientsResponse);
      setIsLoading(false);
    };

    loadMeals();
  }, []);

  return {
    ingredients,
    isLoading,
    setIngredients,
  };
};
