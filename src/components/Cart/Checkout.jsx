import { useRef } from "react";
import useValidateInput from "../../hooks/useValidateInput";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    enteredValue: name,
    isEnteredValueValid: nameIsValid,
    hasError: nameHasError,
    enteredValueChangeHandler: nameChangeHandler,
    onBlurHandler: nameOnBlur,
    reset: nameReset,
  } = useValidateInput((name) => name.trim() !== "");

  const {
    enteredValue: street,
    isEnteredValueValid: streetIsValid,
    hasError: streetHasError,
    enteredValueChangeHandler: streetChangeHandler,
    onBlurHandler: streetOnBlur,
    reset: streetReset,
  } = useValidateInput((street) => street.trim() !== "");

  const {
    enteredValue: postalCode,
    isEnteredValueValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    enteredValueChangeHandler: postalCodeChangeHandler,
    onBlurHandler: postalCodeOnBlur,
    reset: postalCodeReset,
  } = useValidateInput((postalCode) => postalCode.trim().length === 5);

  const {
    enteredValue: city,
    isEnteredValueValid: cityIsValid,
    hasError: cityHasError,
    enteredValueChangeHandler: cityChangeHandler,
    onBlurHandler: cityOnBlur,
    reset: cityReset,
  } = useValidateInput((city) => city.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity);

    props.onConfirmOrder({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });

    nameReset();
    streetReset();
    postalCodeReset();
    cityReset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={`${classes.control} ${nameHasError && classes.invalid}`}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameChangeHandler}
          onBlur={nameOnBlur}
          value={name}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>
            Name must contain at least 1 character!
          </p>
        )}
      </div>
      <div
        className={`${classes.control} ${streetHasError && classes.invalid}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
          onChange={streetChangeHandler}
          onBlur={streetOnBlur}
          value={street}
        />
        {streetHasError && (
          <p className={classes["error-text"]}>Enter the street you live on!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          postalCodeHasError && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          ref={postalCodeInputRef}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeOnBlur}
          value={postalCode}
        />
        {postalCodeHasError && (
          <p className={classes["error-text"]}>
            Enter the postal code of your city (5 digit number)!
          </p>
        )}
      </div>
      <div className={`${classes.control} ${cityHasError && classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
          onChange={cityChangeHandler}
          onBlur={cityOnBlur}
          value={city}
        />
        {cityHasError && (
          <p className={classes["error-text"]}>Enter city you live in!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.closeCart}>
          Cancel
        </button>
        <button disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
