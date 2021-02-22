"use strict";

//EJERCICIO 01
// const marks = [5, 4, 6, 7, 9];
// const inflatedMarks = marks.map((mark) => mark + 1);
// console.log(inflatedMarks);

// //EJERCICIO 02

// const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
// const helloNames = names.map((name) => "Bienvenida " + name);
// console.log(helloNames);

//EJERICICIO 03

// const users = [
//   { name: "María", isPremium: false },
//   { name: "Lucía", isPremium: true },
//   { name: "Susana", isPremium: true },
//   { name: "Rocío", isPremium: false },
//   { name: "Inmaculada", isPremium: false },
// ];

// function handlePremium(user) {
//   if (user.isPremium === true) {
//     return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
//   } else {
//     return `Bienvenida ${user.name}.`;
//   }
// }

// // //Crea un array con los mensajes

// const premiumUsers = users.map((user) => handlePremium(user));
// console.log(premiumUsers);

//Añade mensaje al array original
// users.map((user) => (user["greeting"] = handlePremium(user)));
// console.log(users);

//EJERCICIO 04

// const users = [
//   { name: "María", isPremium: false },
//   { name: "Lucía", isPremium: true },
//   { name: "Susana", isPremium: true },
//   { name: "Rocío", isPremium: false },
//   { name: "Inmaculada", isPremium: false },
// ];

// const premiumUsers = users.filter((user) => user.isPremium === true);
// console.log(premiumUsers);

//EJERCICIO 05

// const pins = [2389, 2384, 2837, 5232, 8998];
// const evenPins = pins.filter((pin) => pin % 2 === 0);
// console.log(evenPins);

//EJERCICIO 06

// const users = [
//   { name: "María", isPremium: false, pin: 2389 },
//   { name: "Lucía", isPremium: true, pin: 2384 },
//   { name: "Susana", isPremium: true, pin: 2837 },
//   { name: "Rocío", isPremium: false, pin: 5232 },
//   { name: "Inmaculada", isPremium: false, pin: 8998 },
// ];

// const evenUsers = users.filter((user) => user.pin % 2 === 0);
// console.log(evenUsers);

//EJERCICIO 07

// const times = [56, 9, 45, 28, 35];

// const result = times.reduce((acc, number) => acc + number) / times.length;
// console.log(result);

// EJERCICIO 08

// const runners = [
//   { name: "Gregory Goyle", time: 56 },
//   { name: "Nymphadora Tonks", time: 9 },
//   { name: "Luna Lovegood", time: 45 },
//   { name: "Cedric Diggory", time: 28 },
//   { name: "Cho Chang", time: 35 },
// ];

// const result = runners.reduce(
//   (acc, runner) => Math.min(acc, runner.time),
//   10000
// );
// console.log(result);

//EJERCICIO 09

// const runners = [
//   { name: "Gregory Goyle", time: 56, student: true },
//   { name: "Nymphadora Tonks", time: 9, student: false },
//   { name: "Luna Lovegood", time: 45, student: true },
//   { name: "Cedric Diggory", time: 28, student: true },
//   { name: "Cho Chang", time: 35, student: true },
// ];

// const studentRunners = runners.filter((runner) => runner.student === true);
// console.log(studentRunners);

// const result = studentRunners.reduce(
//   (acc, studentRunner) => Math.min(acc, studentRunner.time),
//   10000
// );
// console.log(result);

//EJERCICIO 10

// const users = [
//   { name: "María", isPremium: false, pin: 2389 },
//   { name: "Lucía", isPremium: true, pin: 2384 },
//   { name: "Susana", isPremium: true, pin: 2837 },
//   { name: "Rocío", isPremium: false, pin: 5232 },
//   { name: "Inmaculada", isPremium: false, pin: 8998 },
// ];
// a)

// const findUsers = users.find((user) => user.pin === 5232);
// console.log(findUsers);

// b)

// const findUsers = users.findIndex((user) => user.pin === 5232);
// console.log(findUsers);

// const newList = users.splice(3, 1);
// console.log(users);

// si pongo console.log(users); me devuelve la lista sin el elemento que hemos quitado. Si pongo console.log(newList) me devuelve una lista con el/los elementos borrados;

//EJERCICIO 11

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

runners.sort((a, b) => a.time - b.time);
console.log(runners);
