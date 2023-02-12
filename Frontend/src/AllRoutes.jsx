import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AddIngredientsPage from "./components/ingredients/AddIngredientsPage";
import RecipesPage from "./components/recipes/RecipesPage";
import ShoppingListPage from "./components/shopping-list/ShoppingListPage";

const routes = [
  {
    path: "/",
    exact: true,
    Component: HomePage,
  },
  {
    path: "/add-ingredients",
    Component: AddIngredientsPage,
  },
  {
    path: "/recipes",
    Component: RecipesPage,
  },
  {
    path: "/shopping-list",
    Component: ShoppingListPage,
  },
];
export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
