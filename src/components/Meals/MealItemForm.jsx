import { useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import Swal from "sweetalert2";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      Swal.fire({
        title: "Warning!",
        text: "Entered value must be between 1 to 5.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    props.onAddCartItem(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amountMealInput_" + props.id,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
