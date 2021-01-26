"user strict";

const container = document.querySelector(".container");


function keyCode (event){
  if (event.which === 82) {
    container.style.backgroundColor= 'red'}
    else if (event.which === 77) {
      container.style.backgroundColor= 'purple'}
  }
    
container.addEventListener("keydown", keyCode);

// 'use strict';
// const handleElement = document.querySelector ('.document'); 
// console.log(handleElement)
// function changeElement(event) {
//   if (event.key === 'r') {
//     handleElement.classList.add('documentR')
//     handleElement.classList.remove('documentM')
//   } else if (event.key === 'm') {
//     handleElement.classList.add('documentM')
//     handleElement.classList.remove('documentR')
//   }
//   console.log(event.key);
// }
// handleElement.addEventListener('keydown', changeElement);