"user strict";


const buttonElement = document.querySelector('.button');

let textElement = document.querySelector (".text");

buttonElement.addEventListener('click', function changeText () {
  textElement.innerHTML = 'Hola mundo'});