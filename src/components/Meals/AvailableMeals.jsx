import { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Spinner from "../UI/Spinner";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://my-food-order-app-d0974-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const mealsData = await response.json();

      let loadedMeals = [];

      for (const key in mealsData) {
        loadedMeals.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  if (httpError) {
    return <p className={classes["fetch-error"]}>{httpError}</p>;
  }

  if (meals.length === 0) {
    return <Spinner />;
  }

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
