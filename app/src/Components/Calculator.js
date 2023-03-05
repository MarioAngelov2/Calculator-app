import React from "react";
import { useState } from "react";
import "../Style/Calculator.css";

function Calculator() {
  const [result, setResult] = useState("0");
  const [lastButtonClicked, setLastButtonClicked] = useState("");

  const onClickHandler = (ev) => {
    const currentButtonClicked = ev.target.name;

    if (
      /[+\-*/%/./=]/.test(currentButtonClicked) &&
      lastButtonClicked === currentButtonClicked
    ) {
      return;
    }

   if (currentButtonClicked === clear) {
      clear();
   } else if (currentButtonClicked === clearOneDigit) {
    clearOneDigit();
   } else {
    setResult(result  === 0 ? currentButtonClicked : result + currentButtonClicked)
   }

    // setLastButtonClicked(currentButtonClicked);
    // setResult(result.concat(currentButtonClicked));
  };

  const clear = () => {
    setResult("0");
  };

  const clearOneDigit = () => {
    setResult((state) => state.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="calculator">
      <input
        name="text"
        value={result}
        onChange={calculate}
        onFocus={(ev) => {
          if (ev.target.value === 0) {
            setResult("");
          }
        }}
      />
      <div className="keypad">
        <button className="operators" onClick={onClickHandler} name="/">
          /
        </button>
        <button className="operators" onClick={onClickHandler} name="*">
          *
        </button>
        <button className="operators" onClick={clearOneDigit} name="C">
          C
        </button>
        <button className="operators" onClick={clear} name="clear">
          Clear
        </button>
        <button onClick={onClickHandler} name="7">
          7
        </button>
        <button onClick={onClickHandler} name="8">
          8
        </button>
        <button onClick={onClickHandler} name="9">
          9
        </button>
        <button className="operators" onClick={onClickHandler} name="+">
          +
        </button>
        <button onClick={onClickHandler} name="4">
          4
        </button>
        <button onClick={onClickHandler} name="5">
          5
        </button>
        <button onClick={onClickHandler} name="6">
          6
        </button>
        <button className="operators" onClick={onClickHandler} name="-">
          -
        </button>
        <button onClick={onClickHandler} name="1">
          1
        </button>
        <button onClick={onClickHandler} name="2">
          2
        </button>
        <button onClick={onClickHandler} name="3">
          3
        </button>
        <button className="operators" onClick={calculate} name="=">
          =
        </button>
        <button onClick={onClickHandler} name=".">
          .
        </button>
        <button onClick={onClickHandler} name="0">
          0
        </button>
        <button className="operators" onClick={onClickHandler} name="%">
          %
        </button>
      </div>
    </div>
  );
}

export default Calculator;
