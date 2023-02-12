import { Link } from "react-router-dom";
import { SmallX } from "../ui/SmallX";
import classes from "./Meals.module.css";

const MealsListItem = ({ meal, date, onDelete }) => {
  return (
    <div className={classes["list-item"]}>
      {meal ? (
        <>
          <h3>{date.getDate()}</h3>
          <p>{meal.recipe.name}</p>
          <div className={classes["right-action"]}>
            <SmallX onClick={() => onDelete(meal._id)} />
          </div>
        </>
      ) : (
        <>
          <h3>{date.getDate()}</h3>
          <p>No meal planned</p>
          <div className={classes["right-action"]}>
            <Link to={`/recipes?date=${date.toString()}`}>
              <button>Add</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MealsListItem;
