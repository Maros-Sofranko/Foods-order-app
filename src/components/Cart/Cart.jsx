import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartContext.items.length === 0;

  const onAddCartItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const onRemovCartItem = (id) => {
    cartContext.removeItem(id);
  };

  const order = () => {
    setIsOrdering(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            meal={item}
            onAdd={onAddCartItem.bind(null, item)}
            onRemove={onRemovCartItem.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && <Checkout closeCart={props.closeCart} />}
      {!isOrdering && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.closeCart}>
            Close
          </button>
          {!isCartEmpty && (
            <button className={classes.button} onClick={order}>
              Order
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
