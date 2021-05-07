import RandomInteger from "./RandomInteger ";
import "../App.css";

import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(20);
  const generateNewAge = () => {
    return number + 1;
  };

  const handleAge = () => {
    setNumber(generateNewAge());
  };

  return (
    <div className="App">
      <RandomInteger getAge={handleAge} age={number} />
    </div>
  );
};

export default App;
