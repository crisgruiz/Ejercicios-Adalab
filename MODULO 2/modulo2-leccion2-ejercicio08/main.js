'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const contentOne = `<img class="imagen" src="${firstDogImage}" alt="">
<p>${firstDogName}</p>`;
const contentTwo = `<img src="${secondDogImage}" alt="">
<p>${secondDogName}</p>`;
const contentThree = `<img src="${thirdDogImage}" alt="">
<p>${thirdDogName}</p>`;
const itemOne = document.querySelector(".dog1");
const itemTwo = document.querySelector(".dog2");
const itemThree = document.querySelector(".dog3");
itemOne.innerHTML = contentOne;
itemTwo.innerHTML = contentTwo;
itemThree.innerHTML = contentThree;

