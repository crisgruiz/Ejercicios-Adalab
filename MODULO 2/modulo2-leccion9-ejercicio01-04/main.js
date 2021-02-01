"use strict";

// EJERCICIO 1
// let list = [];

// function get100Numbers() {
//   for (let i = 1; i <= 100; i++) {
//     list.push(i);
//   }
//   return list;
// }
// //console.log(get100Numbers());

// //EJERCICIO 2

// function getReversed100Nmbers() {
//   get100Numbers();
//   const listreverse = list.reverse();
//   return listreverse;
// }
// console.log(getReversed100Nmbers());

//EJERCICIO 3

("use strict");
const lostNumbers = [4, 8, 15, 16, 23, 42];

// Crear array números pares
function bestLostNumbers(a) {
  let array = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      array.push(a[i]);
    }
  }
  return array;
}
console.log(bestLostNumbers(lostNumbers));
console.log(bestLostNumbers([1, 2, 3, 8]));

//Crear array múltiplos de 3

function threeLostNumbers(a) {
  let array = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 3 === 0) {
      array.push(a[i]);
    }
  }
  return array;
}
console.log(threeLostNumbers(lostNumbers));

const resultNumbers = bestLostNumbers(lostNumbers).concat(
  threeLostNumbers(lostNumbers)
);
console.log(resultNumbers);

//EJERCICIO 4

// const countElement = document.querySelector(".js-count");
// const listElement = document.querySelector(".js-list");
// const tasks = [
//   { name: "Recoger setas en el campo", completed: true },
//   { name: "Comprar pilas", completed: true },
//   { name: "Poner una lavadora de blancos", completed: true },
//   {
//     name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
//     completed: false,
//   },
// ];
// // Mostrar una frase que indique cuántas tareas hay
// countElement.innerHTML = `Tenemos ${tasks.length} tareas`;
// // Mostrar sólo una tarea
// listElement.innerHTML = `<li>${tasks[0].name}</li>`;
//Mostrar todas las tareas
// let html = "";
// for (const oneTask of tasks) {
//   html += `<li>${oneTask.name}</li>`;
//   // html += `<li>`
//   // html += onetask.name;
//   // html +=`</li>`
// }
// listElement.innerHTML = html;

//Tachar las ya realizadas.

// let html = "";
// for (const oneTask of tasks) {
//   if (oneTask.completed) {
//     html += `<li class = "crossoff">`;
//   } else {
//     html += `<li>`;
//   }

//   html += oneTask.name;
//   html += `</li>`;
// }
// listElement.innerHTML = html;

//Permitir marcar una tarea como 'completa' o 'incompleta'.

// let html = "";
// for (const oneTask of tasks) {
//   if (oneTask.completed) {
//     html += `<li class = "crossoff">`;
//   } else {
//     html += `<li>`;
//   }

//   html += `<input type="checkbox" ${
//     oneTask.completed ? 'checked = "ckecked"' : ""
//   }/>`;
//   html += oneTask.name;
//   html += `</li>`;
// }
// listElement.innerHTML = html;
