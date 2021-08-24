import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  }
  
  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  }

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn" onClick={subtractFromCounter}>-</button>
      <input
        type="number"
        data-testid="input"
        value={inputValue}
        className="text-center"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;