const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${inputText.value}px`;
inputText.addEventListener('input', e => {spanText.style.fontSize = `${inputText.value}px`})