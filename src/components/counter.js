import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className="increase">
      <div>
        <p>
          <span className="para">{counter}</span>
        </p>
        <button onClick={increment}>Like</button>
      </div>
    </div>
  );
}
