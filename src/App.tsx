import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  const [value, setValue] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState(null as string | null);
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setValue(value);
    }
  };

  const handleAdd = (buttonValue) => {
    setValue((state) => {
      return state + buttonValue;
    });
    return buttonValue;
  };
  const handleClean = () => {
    setValue("");
    setResult(0);
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
  };

  const handleEquals = () => {
    setSecondNumber(value);
    if (firstNumber && operator && secondNumber) {
      const result = equals(firstNumber, operator, secondNumber);
      if (result) {
        setResult(result);
      }
    }
    setValue("");
  };

  const equals = (firstNum, operation, secondNum) => {
    switch (operation) {
      case "+": {
        return +firstNum + +secondNum;
      }
      case "-": {
        return +firstNum - +secondNum;
      }
      case "/": {
        return +firstNum / +secondNum;
      }
      case "*": {
        return +firstNum * +secondNum;
      }
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (firstNumber && operator && secondNumber) {
      const result = equals(firstNumber, operator, secondNumber);
      setResult(result);
    }
  }, [firstNumber, operator, secondNumber]);

  const handlePlus = () => {
    setFirstNumber(value);
    setValue("");
    setOperator("+");
  };

  const handleDivide = () => {
    setFirstNumber(value);
    setValue("");
    setOperator("/");
  };

  const handleMultiply = () => {
    setFirstNumber(value);
    setValue("");
    setOperator("*");
  };

  const handleMinus = () => {
    setFirstNumber(value);
    setValue("");
    setOperator("*");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Calculator</h2>
        <div className="topCalculator">
          <span>
            {firstNumber && firstNumber} {operator && operator}{" "}
            {secondNumber && secondNumber}
          </span>
          <input
            type="text"
            value={value}
            onChange={handleInput}
            placeholder="ВВедіть число"
          />
          <span>{`= ${result}`}</span>
        </div>
        <div className="keyboard">
          <button className="keyboard__btn" onClick={() => handleAdd("1")}>
            1
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("2")}>
            2
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("3")}>
            3
          </button>
          <button className="keyboard__btn" onClick={() => handleClean()}>
            C
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("4")}>
            4
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("5")}>
            5
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("6")}>
            6
          </button>
          <button className="keyboard__btn" onClick={() => handleEquals()}>
            =
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("7")}>
            7
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("8")}>
            8
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("9")}>
            9
          </button>
          <button className="keyboard__btn" onClick={handlePlus}>
            +
          </button>
          <button className="keyboard__btn" onClick={handleDivide}>
            /
          </button>
          <button className="keyboard__btn" onClick={() => handleAdd("0")}>
            0
          </button>
          <button className="keyboard__btn" onClick={handleMultiply}>
            *
          </button>
          <button className="keyboard__btn" onClick={handleMinus}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
