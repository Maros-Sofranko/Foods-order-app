import { useContext, useEffect, useState } from "react";
import classes from "./HeaderButton.module.css";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const cartContext = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const numberOfItemsInCart = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  return (
    <button className={btnClasses} onClick={props.openCart}>
      <span className={classes.icon}>
        <FiShoppingCart />
      </span>
      <span>My cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderButton;
