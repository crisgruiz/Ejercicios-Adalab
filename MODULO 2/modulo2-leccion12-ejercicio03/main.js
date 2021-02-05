// version liliana

// 'use strict';
// //create constants from html elements
// const nameSelect = document.querySelector('.js-nombre');
// const lastNameSelect = document.querySelector('.js-apellidos');
// const phoneSelect = document.querySelector('.js-telefono');
// //create array and push elements
// const contactForm = [];
// const contact1 =  {
//     id: 1,
//     name: "Pepa",
//     lastname: "Sanchez Pérez",
//     phone: 6897523417
// };
// const contact2 = {
//     id: 2,
//     name: "Dolores",
//     lastname: "Tremendos de Barriga",
//     phone:6583417627
// };
// const contact3 = {
//     id: 3,
//     name: "Mariluz",
//     lastname: "Jadenagüer Fistro",
//     phone: 6793471247
// };
// contactForm.push(contact1,contact2,contact3);
// console.log(contactForm)

// for (let i= 0; i < contactForm.length; i++) {
//     const newItem = document.createElement('option');
//     newItem.value = i;
//     const innerContent = document.createTextNode(`${contactForm[i].name}`);
//     newItem.appendChild(innerContent);
//     nameSelect.appendChild(newItem);
//     console.log(newItem);
// }
// const handleSelect = () => {
//     lastNameSelect.value = contactForm[nameSelect.value].lastname
//     phoneSelect.value = contactForm[nameSelect.value].phone
// }
// nameSelect.addEventListener('change', handleSelect)

// version María

"use strict";
const adalabersList = [
  { name: "Irene", surname: "Mañas", phone: 677464646 },
  {
    name: "María",
    surname: "Virumbrales",
    phone: 677464523,
  },
  {
    name: "Ana",
    surname: "Bescós",
    phone: 677464646,
  },
];
const optionElement = document.querySelector(".option");
const selectElement = document.querySelector(".button");
const nameElement = document.querySelector(".js-name");
const surnameElement = document.querySelector(".js-surname");
const telElement = document.querySelector(".js-tel");
function handleData() {
  for (let index = 0; index < adalabersList.length; index++) {
    if (index === parseInt(selectElement.value)) {
      console.log("Clickada", adalabersList[index]);
    }
  }
  for (const adalaberItem of adalabersList) {
    if (adalaberItem.name === selectElement.value) {
      console.log("Clickada", adalaberItem);
      telElement.value = adalaberItem.phone;
    }
    //console.log(adalaberItem.name, selectElement.value);
  }
}
selectElement.addEventListener("change", handleData);
