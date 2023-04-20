import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "700px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: "14px",
    opacity: "white",
  },
};

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <header>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Cart closeCart={closeModal} />
        </Modal>
        <Header openCart={openModal} />
      </header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
