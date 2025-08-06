import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
      <button onClick={() => setCount(count - 1)}>Decrement ➖</button>
      <button onClick={() => setCount(0)}>Reset 🔄</button>
    </div>
  );
}

export default CounterApp;
