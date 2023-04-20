import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
const [isCartShown, setIsCartShown] = useState(false);

const openCart = () => {
  setIsCartShown(true);
}

const closeCart = () => {
  setIsCartShown(false);
}

  return (
    <>
      <header>
        {isCartShown && <Cart closeCart={closeCart} />}
        <Header openCart={openCart} />
      </header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
