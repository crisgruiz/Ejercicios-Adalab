import React from "react";

const RandomInteger = (props) => {
  const getAgeNumber = function () {
    props.getAge();
  };

  return (
    <div>
      <span>Hoy tengo {props.age} años de edad</span>
      <button type="button" onClick={getAgeNumber}>
        Hazme más viejo
      </button>
    </div>
  );
};

export default RandomInteger;
