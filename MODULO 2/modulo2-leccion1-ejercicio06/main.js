'use strict';

const mainElement = document.querySelector('.container');

/*Opción 1*/

// const title = "<h1>Lorem Ipsum </h1>"

// const image = "<img src=http://via.placeholder.com/350x150>"

// const text = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>"

// mainElement.innerHTML = title + image + text;

/*Opción 2*/

const content = '<h1>Lorem Ipsum </h1><img src=http://via.placeholder.com/350x150><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

mainElement.innerHTML = content;