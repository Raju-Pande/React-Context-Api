import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";
const itemContext = createContext();

// here custom hook create
function useValue() {
  const value = useContext(itemContext);
  return value;
}

// here custom provider use
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
  };

  const toggle = () => {
    setShowCart(!showCart);
  };
  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue, itemContext };
export default CustomItemContext;

// customProvider is a Component

// A custom provider simplifies the context logic by consolidating it into a single file. It also provides more flexibility and control over how data is provided and consumed by the components.

// Readability , maintain, easy to debug
