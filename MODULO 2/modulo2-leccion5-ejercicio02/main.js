"user strict";


const Button = document.querySelector('.button');

let nameElement = document.querySelector (".text");



Button.addEventListener('click', function changeText () {
    console.log(`Hola ${nameElement.value}`)}
);
