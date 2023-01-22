let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let resetButton = document.querySelector('#reset-button');
let numberDisplay = document.querySelector('#counter-display');
let checkMinus = document.querySelector('#form-check-input');
let i = 0;


function plus(){
  i++;
  numberDisplay.innerHTML = i;
}

function minus(){
  i--;
  numberDisplay.innerHTML = i;
}

function reset(){
  i = 0;
  numberDisplay.innerHTML = i;
  checkMinus.checked = false;
}

function disableMinusButton(){
  minusButton.disabled = true;
  minusButton.style.opacity = '0.5'
}

function enableMinusButton(){
  minusButton.disabled = false;
  minusButton.style.opacity = '1'
}

function resetCheckBox(){
  i = 0;
  numberDisplay.innerHTML = i;
}

plusButton.addEventListener('click', () =>{
  plus();

  if(i == 1 && minusButton.disabled == true){
    enableMinusButton();
  }
})

minusButton.addEventListener('click', () =>{
  if(i > 0 || checkMinus.checked == true){
    minus();
  }else if(i == 0 || checkMinus.checked == false){
    disableMinusButton();
  }
})

resetButton.addEventListener('click', () =>{
  reset();
  if(minusButton.disabled == true){
    enableMinusButton();
  }
})

checkMinus.addEventListener('click', () =>{
  if(i < 0 && checkMinus.checked == false){
    resetCheckBox();
  }else if(i == 0 && checkMinus.checked == true){
    enableMinusButton();
  }
})