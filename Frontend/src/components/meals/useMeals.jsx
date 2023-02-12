import { useState, useEffect } from "react";

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch("http://localhost:8080/meals");
      const rawMealsResponse = await response.json();
      setRawMeals(rawMealsResponse);
      setIsLoading(false);
    };

    loadMeals();
  }, []);

  return {
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    isLoading,
    setMeals: setRawMeals,
  };
};
