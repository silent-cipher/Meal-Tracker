import MealsListItem from "./MealsListItem";
import classes from "./Meals.module.css";

const next7Days = Array(7)
  .fill()
  .map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

const datesAreSameDay = (date1, date2) => {
  return (
    date1.getYear() === date2.getYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const MealsList = ({ isLoading, meals, onDelete }) => {
  return (
    <div className={classes["list-container"]}>
      <h1>Planned Meals</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        next7Days.map((date, index) => {
          const mealForDay = meals.find((meal) =>
            datesAreSameDay(date, meal.plannedDate)
          );
          return (
            <MealsListItem
              key={index}
              meal={mealForDay}
              date={date}
              onDelete={onDelete}
            />
          );
        })
      )}
    </div>
  );
};

export default MealsList;
