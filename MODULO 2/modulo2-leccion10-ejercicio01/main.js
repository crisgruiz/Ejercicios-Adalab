"use strict";

function getNumber() {
  fetch("https://api.rand.fun/number/integer?max=20&min=10")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getNumber);
