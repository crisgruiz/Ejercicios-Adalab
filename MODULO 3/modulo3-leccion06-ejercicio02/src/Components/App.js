import RandomInteger from "./RandomInteger ";
import "../App.css";

import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(20);
  const [gift, setGift] = useState(1);
  const generateNewAge = () => {
    return number + 1;
  };
  // const generateNewGift = () => {
  //   return gift + 1;
  // };

  const handleAge = () => {
    setNumber(generateNewAge());
  };
  const handleGift = () => {
    setGift(gift + 1);
  };

  return (
    <div className="App">
      <RandomInteger
        getAge={handleAge}
        age={number}
        getGift={handleGift}
        gift={gift}
      />
    </div>
  );
};

export default App;
