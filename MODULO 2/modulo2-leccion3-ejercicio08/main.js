'use strict';

const currentYear = 2021;
const years = (currentYear % 4);
const yearsLeft = 4 - (currentYear % 4);
const nextGapYear = currentYear + yearsLeft;

if (years !== 0) {
  console.log(`Faltan ${yearsLeft} años hasta el siguiente año bisiesto. El próximo año bisiesto será en ${nextGapYear}`);
}
else{
  console.log(`Este año es bisiesto`);
}

