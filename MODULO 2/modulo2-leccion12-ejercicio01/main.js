"use strict";

//EJERCICIO 01
const listElement = document.querySelector(".list");
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  let liItem = document.createElement("li");
  liItem.appendChild(document.createTextNode(numbers[i]));
  listElement.appendChild(liItem);
}

//Solución Pro de Edu

// const listElement = document.querySelector(".list");
// const numbers = [1, 2, 3, 4];

// function addListItem(valueItem) {
//   let liItem = document.createElement("li");
//   liItem.appendChild(document.createTextNode(valueItem));
//   listElement.appendChild(liItem);
// }

// numbers.forEach((element) => addListItem(element));

//EJERCICIO 02
