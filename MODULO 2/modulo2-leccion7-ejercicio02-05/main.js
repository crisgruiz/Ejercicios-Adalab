"user strict";
//EJERCICIO 01


function workWithMovies(){

  let movies = ['Tenet', 'Soul', 'Big Fish'];
  movies[3]= 'Leon';
  movies[2]= 'Deadpool'
  movies[0]= 'La La Land';
  return movies;
}
console.log(workWithMovies());

//EJERCICIO 02

// for (let i = 0; i <= 10; i++) {
//     console.log('Voy por la vuelta ' + i);
//   }

//EJERCICIO 03

// let acc = 0;

// for (let i = 0; i <= 10; i++) {
//  acc += 2;
// //  console.log('El resultado es: ' + acc);
//   };
//   console.log('El resultado es: ' + acc);

  //EJERCICIO 04

// let moon = 2017;

// for (let i = 0; i < 15; i++) {
//   moon += 3;   
//  console.log('El resultado es: ' + moon);
//   };
  // console.log('El resultado es: ' + moon);

  //EJERCICIO 5
  //a)

  // let sum = 0;
  // const scores = [4, 2, 7, 8, 6];
  
  // for(let i=0; i < scores.length; i++){
  //   sum += scores[i];
  // }
  // console.log('El resultado es: ' + (sum/scores.length));

  //b)

  // let sum = 0;
  // const scores = [4, 2, 7, 8, 6];
  // scores[5] = 9;
  // for(let i=0; i < scores.length; i++){
  //   sum += scores[i];}
  // console.log('El resultado es: ' + (sum/scores.length));

   //c)

  // const scores = [4, 2, 7, 8, 6];

  // function average(numbers) {
  //   let acc = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     acc += numbers[i];
  //   }
  //   const media = acc / numbers.length;
  //   return media;
  // }
  // const averageResult = average(scores);
  
  // console.log(`La media es ${averageResult}`);