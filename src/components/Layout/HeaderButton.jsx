import classes from "./HeaderButton.module.css";
import { FiShoppingCart } from "react-icons/fi";

const HeaderButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FiShoppingCart />
      </span>
      <span>My cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
