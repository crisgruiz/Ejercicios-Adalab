'use strict';
const dayshours = 365 * 24;
const age = document.querySelector('.age')
const sectionResult = document.querySelector ('.sectionResult')

const numberAge = parseInt (age.innerHTML);
// console.log (dayshours);
console.log (age.innerHTML * dayshours);
const result = (age.innerHTML * dayshours);
console.log (result);

sectionResult.innerHTML = `Has vivido ${result} horas`;
