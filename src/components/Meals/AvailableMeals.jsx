import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const MOCK_DATA = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 30.00,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 13.00,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const meals = MOCK_DATA.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
