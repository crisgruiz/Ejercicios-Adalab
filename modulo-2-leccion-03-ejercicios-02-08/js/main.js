"use strict";

console.log("EJERCICIO 2");

const username = "Laura";

if (username === "Marcjanna" || username === "Laura") {
  console.log(`Bienvenida, ${username}`)
} else {
  console.log("Lo siento pero el usuario que has introducido no está registardo.")
}

// console.log("EJERCICIO 3");

// const myNumber = 19;

// if (myNumber === 0) {
//   console.log('El número es 0')
// } else if (myNumber < 0) {
//   console.log('El número es negativo')
// } else if ((myNumber + 2) > 13 && (myNumber + 2) <= 20) {
//   console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
// } else if (myNumber > 20 && myNumber < 50) {
//   console.log('El número es mayor que 20 pero menor que 50')
// } else {
//   console.log('el número no es 123123125')
// }

// console.log("EJERCICIO 4");

// let dogAge = 17;

// if (dogAge === 1) {
//   console.log("Tu perro tiene 15 años de humano")
// } else if (dogAge === 2) {
//   console.log("Tu perro tiene 24 años de humano")
// } else {
//   let dogInHumanYear = 9;
//   let dogAgeToCalculate = dogAge - 2;
//   let convertedAge = 24 + (dogAgeToCalculate * dogInHumanYear);
//   console.log(`Tu perro tiene ${convertedAge} años de humano`);
// }

// console.log("EJERCICIO 5");

// const activableSection = document.querySelector(".rainbow");
// const titleInSection = document.querySelector(".title");
// const messageInSection = document.querySelector(".message");

// if (activableSection.classList.contains("warning")) {
//   titleInSection.innerHTML = "Aviso"
//   messageInSection.innerHTML = "Tenga cuidado"
// } else if (activableSection.classList.contains("error")) {
//   titleInSection.innerHTML = "Error"
//   messageInSection.innerHTML = "Ha surgido un error"
// } else if (activableSection.classList.contains("success")) {
//   titleInSection.innerHTML = "Correcto"
//   messageInSection.innerHTML = "Los datos son correctos"
// } else {
//   activableSection.classList.add("hidden");
// }

console.log("EJERCICIO 6")
let avocados;
const avocadoPrice = 1.5;
const money = 1;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }


// buenas practicas según lo que nos ha diucho Miguel: el resultado del ternary estamos asignando a variable; por eso ponemos el nombre de la variable a la izquierda y luego en ternary ya no hacemos asignaciones
avocados = money >= avocadoPrice ? money / avocadoPrice : 0;

console.log(avocados);

// console.log("EJERCICIO 8");

// console.log(2021 % 4)

// const currentYear = 2021;
// const yearsLeft = 4 - (currentYear % 4);
// const nextGapYear = currentYear + yearsLeft;

// if (yearsLeft != 0) {
//   console.log(`Faltan ${yearsLeft} hasta el siguiente año bisiesto.`)
// }