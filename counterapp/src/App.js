import React, { useState } from "react";
import Button from "./btn component/button";
import "./App.css";
import { getValue } from "@testing-library/user-event/dist/utils";

function App() {
  const [count, setCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);

  let incrementCount = () => {
    let x = parseInt(inputCount) || 1;
    setCount(count + x);
  };

  let decrementCount = () => {
    let x = inputCount || 1;
    setCount(count - x);
  };

  let resetCount = () => {
    setCount(0);
  };

  const inputHandler = (event) => {
    setInputCount(event.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <div className="buttons">
        <Button title={"Decrement"} action={decrementCount} />
        <Button title={"Increment"} action={incrementCount} />
        <Button title={"Reset"} action={resetCount} />
        <input type="number" value={inputCount} onChange={inputHandler} />
      </div>
    </div>
  );
}
export default App;
