import { getMeals } from "@/lib/meals";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
async function MealdGrid() {
  const meals = await getMeals();

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealdGrid;
