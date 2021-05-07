import React from "react";

const RandomInteger = (props) => {
  const getAgeNumber = function () {
    props.getAge();
  };
  const getGiftNumber = function () {
    props.getGift();
  };
  return (
    <>
      <div>
        <span>Hoy tengo {props.age} años de edad</span>
        <button type="button" onClick={getAgeNumber}>
          Hazme más viejo
        </button>
      </div>
      <div>
        <span>Tengo {props.gift} regalo"</span>
        <button type="button" onClick={getGiftNumber}>
          Dame regalos
        </button>
      </div>
    </>
  );
};

export default RandomInteger;
