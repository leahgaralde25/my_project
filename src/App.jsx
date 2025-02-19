import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 0 && setCount(count - 1);
  const handleReset = () => setCount(0);

  const handleCalculate = (operation) => {
    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    const number1 = Number(num1);
    const number2 = Number(num2);
    let res;

    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <div className="container">
      <h1 className="title">Counter: {count}</h1>
      <div className="counter-buttons">
        <button className="btn" onClick={handleIncrement}>+</button>
        <button className="btn" onClick={handleDecrement} disabled={count === 0}>
          -
        </button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
      </div>
      <h2 className="subtitle">Basic Calculator</h2>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          className="input-box"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          className="input-box"
        />
      </div>
      <div className="calculator-buttons">
        <button className="btn calc-btn" onClick={() => handleCalculate("+")}>+</button>
        <button className="btn calc-btn" onClick={() => handleCalculate("-")}>-</button>
        <button className="btn calc-btn" onClick={() => handleCalculate("*")}>*</button>
        <button className="btn calc-btn" onClick={() => handleCalculate("/")}>/</button>
      </div>
      {result !== null && <h3 className="result">Result: {result}</h3>}
    </div>
  );
}

export default App;
