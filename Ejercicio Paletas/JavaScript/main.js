"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");
const filterInput = document.querySelector(".js-filter");
const formElement = document.querySelector(".js-form");

let palettes = [];

//Llamar a la API para acceder a los datos.

function getDataFromApi() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;
      painPalette();
      setInLocalStorage();
    });
}

//localStorage

function setInLocalStorage() {
  //stringify pasa los datos del array a texto que es el formato de JASON
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem("palettes", stringPalettes);
}

function getFromLocalStorage() {
  const localStoragePalettes = localStorage.getItem("palettes");

  //Con la condición indicamos que cuando no tenemos nada guardado en el LocalStorage saque los datos de la API (primera vez que se accede a la página) y cuando si hay datos, los coja del LocalStorage

  if (localStoragePalettes === null) {
    getDataFromApi();
  } else {
    //parce hace que los datos del localStorage se pasen de texto a formato array
    const arrayPalettes = JSON.parse(localStoragePalettes);
    palettes = arrayPalettes;
    painPalette();
  }
}

//Función de filtrado
function handleFilter(ev) {
  console.log("filtrando...");
}

filterInput.addEventListener("keyup", handleFilter);

function handleForm(ev) {
  ev.preventDefault();
}
formElement.addEventListener("submit", handleForm);

//Función que pinta las paletas

function painPalette() {
  let htmlCode = "";
  for (const palette of palettes) {
    htmlCode += '<li class="palette">';
    htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode += `<div class="palette__colors">`;
    //Hacemos un for ya que tenemos varios divs (uno por cada paleta de colores)
    for (const paletteColor of palette.colors) {
      htmlCode += `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }
  palettesContainer.innerHTML = htmlCode;
}

//Llamamos a la función para que se active al cargar la página

getFromLocalStorage();
