import "../App.css";
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const numbers = [1, 4, 6, 8, 45, 89];

  function handleNumber(ev) {
    setNumber(ev.target.value);
  }

  let numberValues = numbers
    .filter((n) => {
      return n > number;
    })
    .map((numberValue, i) => {
      return <li key={i}>{numberValue}</li>;
    });

  return (
    <>
      <form className="form">
        <label htmlFor=""> </label>
        <input type="text" className="input" onChange={handleNumber}></input>
      </form>
      <div className="App">
        <ul>{numberValues}</ul>
      </div>
    </>
  );
};

export default App;
