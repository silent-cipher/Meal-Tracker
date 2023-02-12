import IngredientsListItem from "./IngredientsListItem";
import { Link } from "react-router-dom";
const IngredientsList = ({ isLoading, ingredients, onDelete }) => {
  return (
    <div className="list-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        ingredients.map((ingredient) => (
          <IngredientsListItem
            key={ingredient.name}
            ingredient={ingredient}
            onDelete={onDelete}
          />
        ))
      )}
      <Link to="/add-ingredients">
        <button className="space-before">+ Add Ingredient</button>
      </Link>
    </div>
  );
};

export default IngredientsList;
