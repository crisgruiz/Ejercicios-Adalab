"user strict";

const text = document.querySelector('.text');

text.addEventListener('mouseover', function addText () {text.innerHTML = text.innerHTML + text.innerHTML}
);

// const addText = () => {
//     const text = document.querySelector('.text');
//     const result = text.innerHTML + text.innerHTML;
//     text.innerHTML = result;
// };

// text.addEventListener('mouseover', addText);