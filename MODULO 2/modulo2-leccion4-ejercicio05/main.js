'use strict';

// function getEl(a){
//   return document.querySelector(a)
// };

// const El = getEl('.text');

const El = document.querySelector(".text");
console.log (El);

El.addEventListener('mouseover', function addText () {El.innerHTML = El.innerHTML + El.innerHTML}
);