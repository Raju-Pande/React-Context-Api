import React, { useContext } from "react";
import colorContext from "../context"; // Correct import

function ChildComponent() {
  const color = useContext(colorContext);

  return <p style={{ color: color }}>Color code: {color}</p>;
}

export default ChildComponent;
