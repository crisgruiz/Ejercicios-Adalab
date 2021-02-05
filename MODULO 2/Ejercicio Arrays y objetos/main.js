"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];
const promoElement = document.querySelector(".js-result");

function paintPromos() {
  let htmlCode = "";
  htmlCode += `<ul>`;
  for (const promo of promos) {
    htmlCode += paintPromo(promo);
  }
  htmlCode += `</ul>`;
  promoElement.innerHTML = htmlCode;
}

//EJERCICO 1-3
// function paintPromo(promo) {
//   let htmlCode = "";
//   htmlCode += `<li>`;
//   htmlCode += `<p>Nombre: ${promo.name}</p>`;
//   htmlCode += `<p>Promo: ${promo.promo}</p>`;
//   htmlCode += `<p>Número de alumnas: ${promo.students.length}</p>`;
//   htmlCode += `</li>`;
//   return htmlCode;
// }
// paintPromos();

//EJERCICO 4

function paintPromo(promo) {
  let htmlCode = "";
  htmlCode += `<li>`;
  htmlCode += `<p>Nombre: ${promo.name}</p>`;
  htmlCode += `<ul>`;
  for (const student of promo.students) {
    htmlCode += `<li>${student.name}</li>`;
  }
  htmlCode += `</ul>`;
  htmlCode += `</li>`;
  return htmlCode;
}
paintPromos();
