'use strict';

function price(a) {
  return ('Precio sin IVA ' + a) + (', IVA ' + a*0.21 ) + (', Total ' + a*1.21);
}

// const result = sum(3, 9);
// console.log('Resultado', result);

console.log(price(10));