//Ejercicio 1

// const Suma = (a, b) => {
//   return a + b;
// };

// console.log(Suma(2, 9));

//Ejercicio 2
// const fs = require("fs");

// const handleFile = (err, fileContent) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     // console.log('Contenido del fichero en formato texto:', fileContent);
//     const jsonData = JSON.parse(fileContent);
//     console.log("Contenido del fichero en formato objeto:", jsonData);
//     console.log(`Título: ${jsonData.originalContent}`);
//     console.log(`Contenido: ${jsonData.changedContent}`);
//     console.log(`Contenido: ${jsonData.textLenght}`);
//   }
// };

// fs.readFile("./input.json", "utf8", handleFile); // callback

// const object = {
//   originalContent: "Lorem ipsum",
//   changedContent: "LOREM IPSUM",
//   textLenght: 11,
// };

// const jsonData = JSON.stringify(object);

// console.log(jsonData);
//Ejercicio 3

const fs = require("fs");

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input-file.txt", (fileContent) => {
  const newObject = JSON.parse(fileContent);
  const currentDate = new Date().toString();
  newObject.date = currentDate;
  writeFile("./output.txt", JSON.stringify(newObject), () => {
    console.log("The file has been copied!");
  });
});
