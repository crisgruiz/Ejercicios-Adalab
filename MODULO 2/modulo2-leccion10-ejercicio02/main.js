"use strict";

//PRUEBA CON HOME ASSISTANT
// function getNumber() {
//   fetch("https://api.interurbanos.welbits.com/v1/stop/3999")
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".js-result").innerHTML =
//         data.stopName + " " + data.lines[0].waitTime;
//     });
// }
// document.querySelector(".js-number").addEventListener("click", getNumber);

A)
function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

// B)

const btn2 = document.querySelector(".js-dog1");
btn2.addEventListener("click", getDogImage);
