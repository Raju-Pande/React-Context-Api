// import React, { useContext } from "react";
import colorContext from "../context"; // Correct import

function ChildComponent() {
  // const value = useContext(colorContext);

  // here use consumer
  return (
    <colorContext.Consumer>
      {(value) => (
        <p style={{ color: value.color }}>Color code: {value.color}</p>
      )}
    </colorContext.Consumer>
  );
}

export default ChildComponent;
