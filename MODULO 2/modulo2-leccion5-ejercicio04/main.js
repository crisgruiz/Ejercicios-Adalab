"user strict";
const text = document.querySelector(".text");
const pixelsChange = 250;
function handleChangeColor() {
  if (window.scrollY > pixelsChange) {
    text.classList.add("text-color");
    // text.style.backgroundColor= 'red' ;
  } else {
    // text.style.backgroundColor= 'green' ;
    text.classList.remove("text-color");
  }
}
window.addEventListener("scroll", handleChangeColor);