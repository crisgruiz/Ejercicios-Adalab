"user strict";
const container = document.querySelector(".container");

const adalaber = {};
adalaber.name = 'María';
adalaber.age = 31;
adalaber.job = 'periodista'

// MISMA FORMA
const adalaber2 = {
name: 'Rocío',
age: 25,
job:'actriz'
};

console.log('Mi nombre es ' + adalaber.name + ', tengo ' + adalaber.age + 'años y soy ' + adalaber.job);

// EJERCICIO 2

adalaber.run = () => {
    console.log("Estoy corriendo");
}
adalaber.runMarathon = (distance) => {
    console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);
}
adalaber.runMarathon(50);

// EJERCICIO 3

const adalaber3 = {};
adalaber.name = 'María';
adalaber.age = 31;
adalaber.job = 'periodista';
adalaber.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
};
console.log(adalaber.showBio());