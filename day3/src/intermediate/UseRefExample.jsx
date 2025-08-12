import React, { useRef } from 'react';

export default function UseRefExample() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus(); // Focuses input
  }

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
