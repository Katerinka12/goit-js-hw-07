
   const btnMinys = document.querySelector('button[data-action="decrement"]');
   const btnPlus = document.querySelector('button[data-action="increment"]');
   const elValue = document.querySelector("#value");

let  counterValue = 0;

btnPlus.addEventListener ("click", onBtnPlusClick);
btnMinys.addEventListener ("click", onBtnMinysClick);

function onBtnPlusClick() {
    counterValue += 1;
    elValue.textContent = counterValue;
}

function onBtnMinysClick() {
    counterValue -= 1;
    elValue.textContent = counterValue;
}