import FoodPicture from "../../assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Order Food</h1>
        <HeaderButton openCart={props.openCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={FoodPicture} alt="Food" />
      </div>
    </>
  );
};

export default Header;
