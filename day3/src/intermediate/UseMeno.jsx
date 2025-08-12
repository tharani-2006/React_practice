import React, { useState, useMemo } from 'react';

export default function UseMeno() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
