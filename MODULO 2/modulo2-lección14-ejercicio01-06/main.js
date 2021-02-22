"use strict";

//EJERCICIO 01

// let counter = 0;

// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector(".time");
//   time.innerHTML = counter;
// };

// setInterval(incrementAndShowCounter, 2000);

//EJERCICIO 02

// let counter = 0;

// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector(".time");
//   //   time.innerHTML = counter;
//   if (counter <= 12) {
//     time.innerHTML = counter;
//   } else {
//     time.innerHTML = "";
//   }
// };
// setInterval(incrementAndShowCounter, 1000);

//EJERCICIO 03

// let seconds = 0;

// function updateClock() {
//   seconds++;
//   const time = document.querySelector(".time");
//   if (seconds < 60) {
//     time.innerHTML = `escrito hace ${seconds} segundos`;
//   } else if (seconds === 60) {
//     time.innerHTML = `escrito hace 1 minuto`;
//   }
// }

// setInterval(updateClock, 200);

//EJERCICIO 04

// const addMsg = () => {
//   const time = document.querySelector(".time");
//   time.innerHTML = "Su sesión ha expirado";
// };

// setTimeout(addMsg, 15000);

//EJERCICIO 05

// let counter = 0;
// let stopCounter;
// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector(".time");
//   time.innerHTML = counter;
//   if (counter >= 12) {
//     clearInterval(stopCounter);
//   }
// };
// stopCounter = setInterval(incrementAndShowCounter, 1000);

//EJERCICIO 06

let counter = 0;
let temp;
const stopButton = document.querySelector(".js-stop");
const continueButton = document.querySelector(".js-continue");
const time = document.querySelector(".time");
const incrementAndShowCounter = () => {
  counter++;
  time.innerHTML = counter;
};
function pressStop() {
  clearInterval(temp);
}
function pressContinue() {
  incrementAndShowCounter();
  temp = setInterval(incrementAndShowCounter, 1000);
}
temp = setInterval(incrementAndShowCounter, 1000);
stopButton.addEventListener("click", pressStop);
continueButton.addEventListener("click", pressContinue);
