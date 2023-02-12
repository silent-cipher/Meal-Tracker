import React from "react";
import { BackButton } from "../ui/BackButton";
import { useShoppingList } from "./useShoppingList";

const ShoppingListPage = () => {
  const { isLoading, items } = useShoppingList();
  return (
    <div className="page">
      <BackButton />
      <div className="cetered-container">
        <h1>Here's your shopping list:</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => <p key={item}>{item}</p>)
        )}
      </div>
    </div>
  );
};

export default ShoppingListPage;
