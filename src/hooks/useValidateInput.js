import { useState } from "react";

const useValidateInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isEnteredValueValid = validateInput(enteredValue);
  const hasError = !isEnteredValueValid && isTouched;

  const enteredValueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    enteredValue,
    isEnteredValueValid,
    hasError,
    enteredValueChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useValidateInput;
