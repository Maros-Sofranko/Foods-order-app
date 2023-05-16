import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Spinner from "../UI/Spinner";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const confirmOrder = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://my-food-order-app-d0974-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          data: userData,
          cartItems: cartContext.items,
        }),
      }
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
    cartContext.clearCart();
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

  const modalCartContent = (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && (
        <Checkout onConfirmOrder={confirmOrder} closeCart={props.closeCart} />
      )}
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

  return (
    <>
      {!isSubmitting && !isSubmitted && modalCartContent}
      {isSubmitting && <Spinner />}
      {isSubmitted && !isSubmitting && (
        <>
          <p>Your order was sent successfully!</p>
          <div className={classes.actions}>
            <button
              className={classes.button}
              onClick={props.closeCart}
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
