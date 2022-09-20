const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

textInput.addEventListener('input', onInputText);

function onInputText(event){
    textSpan.textContent = event.target.value;

    if(event.target.value === ""){
        textSpan.textContent =  "Anonymous"  
    }
}