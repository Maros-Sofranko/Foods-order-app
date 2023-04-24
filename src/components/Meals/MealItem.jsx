import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const mealPrice = `$${meal.price.toFixed(2)}`;

  const addCartItem = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm onAddCartItem={addCartItem} id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
