import RecipeSearchResultsListItem from "./RecipeSearchResultsListItem";
const RecipeSearchResultsList = ({ recipes, ingredients }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <RecipeSearchResultsListItem
            key={recipe.id}
            recipe={recipe}
            ingredients={ingredients}
          />
        );
      })}
    </>
  );
};

export default RecipeSearchResultsList;
