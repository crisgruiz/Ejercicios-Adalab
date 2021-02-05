"use strict";
const buttonClick = document.querySelector(".search");
let nameElement = document.querySelector(".user");
let namesResult = document.querySelector(".result");
let similarNames = [];

fetch(`https://swapi.dev/api/people/`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    similarNames = data.results;
    lookForName();
  });

function lookForName() {
  let html = "";
  html += `<ul>`;
  for (let index = 0; index < similarNames.length; index++) {
    // if (nameElement.value === similarNames[index].name) {
    //   html += `<li>${similarNames[index].name}: ${similarNames[index].gender}</li>`;
    // }
    if (similarNames[index].name.includes(nameElement.value)) {
      html += `<li>${similarNames[index].name}: ${similarNames[index].gender}</li>`;
    }
  }
  html += `</ul>`;
  namesResult.innerHTML = html;
}
buttonClick.addEventListener("click", lookForName);

//SOLUCIÓN BUENA BUENA

// let protagonist;
// let protaList;
// function getNamePeople() {
//   protagonist = nameElement.value;
//   fetch("https://swapi.dev/api/people/?search=" + protagonist)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.results);
//       protaList = data.results;
//       let htmlCode = "";
//       for (let i = 0; i < protaList.length; i++) {
//         htmlCode += `<li>${protaList[i].name}, ${protaList[i].gender}</li>`;
//         /*if (
//           protaList[i].name.toUpperCase().includes(protagonist.toUpperCase())
//         ) {
//           console.log("correcto");
//         } else {
//           console.log("incorrecto");
//         }*/
//       }
//       namesResult.innerHTML = htmlCode;
//     });
// }
// buttonClick.addEventListener("click", lookForName);
