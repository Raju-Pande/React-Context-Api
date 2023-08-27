import { createContext, useState } from "react";

export const itemContext = createContext();
// here custom provider use
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
      {children}
    </itemContext.Provider>
  );
}

export default CustomItemContext;

// customProvider is a Component

// A custom provider simplifies the context logic by consolidating it into a single file. It also provides more flexibility and control over how data is provided and consumed by the components.
