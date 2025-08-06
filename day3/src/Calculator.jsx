import React, { useState } from 'react';

function CalculatorApp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalc = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult("Invalid Operation");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />
      <button onClick={() => handleCalc('+')}>Add ➕</button>
      <button onClick={() => handleCalc('-')}>Subtract ➖</button>
      <button onClick={() => handleCalc('*')}>Multiply ✖️</button>
      <button onClick={() => handleCalc('/')}>Divide ➗</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default CalculatorApp;
