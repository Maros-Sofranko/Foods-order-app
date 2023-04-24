import { useContext } from "react";
import classes from "./HeaderButton.module.css";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const cartContext = useContext(CartContext);

  const numberOfItemsInCart = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.openCart}>
      <span className={classes.icon}>
        <FiShoppingCart />
      </span>
      <span>My cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderButton;
