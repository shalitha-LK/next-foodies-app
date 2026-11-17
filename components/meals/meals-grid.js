import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
function MealdGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meals.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealdGrid;
