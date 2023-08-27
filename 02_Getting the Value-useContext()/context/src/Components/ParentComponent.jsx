import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import colorContext from "../context"; // Correct import

function ParentComponent() {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      {/* Provide the actual context object */}
      <colorContext.Provider value={color}>
        <ChildComponent />
      </colorContext.Provider>
    </>
  );
}

export default ParentComponent;
