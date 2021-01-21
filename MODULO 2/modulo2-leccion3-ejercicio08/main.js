'use strict';

const currentYear = 2021;
const yearsLeft = 4 - (currentYear % 4);
const nextGapYear = currentYear + yearsLeft;

if (yearsLeft != 0) {
  console.log(`Faltan ${yearsLeft} años hasta el siguiente año bisiesto. El próximo año bisiesto será en ${nextGapYear}`);
}
