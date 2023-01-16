let plusButton = document.querySelector('.plus-button');
let minusButton = document.querySelector('.minus-button');
let resetButton = document.querySelector('.reset-button');
let numberDisplay = document.querySelector('.counter-display');
let checkMinus = document.querySelector('.form-check-input')
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
  numberDisplay.innerHTML = '0';
  document.querySelector('.form-check-input').checked = false;
}

function disableMinusButton(){
  document.querySelector('.minus-button').disabled = true;
  minusButton.style.opacity = '0.5'
  minusButton.style.border = 'none'
}

function enableMinusButton(){
  document.querySelector('.minus-button').disabled = false;
  minusButton.style.opacity = '1'
  minusButton.style.border = '1px solid white'
}

function disableCheckBox(){
  document.querySelector('.form-check-input').disabled = true;
}

function resetCheckBox(){
  i = 0;
  numberDisplay.innerHTML = i;
}

plusButton.addEventListener('click', () =>{
  plus();

  if(i == 1){
    enableMinusButton();
  }
})

minusButton.addEventListener('click', () =>{
  if(i > 0 || document.querySelector('.form-check-input').checked == true){
    minus();
  }else if(i == 0 || document.querySelector('.form-check-input').checked == false){
    disableMinusButton();
  }
})

resetButton.addEventListener('click', () =>{
  reset();
  if(document.querySelector('.minus-button').disabled == true){
    enableMinusButton();
  }
})

checkMinus.addEventListener('click', () =>{
  if(i < 0 && document.querySelector('.form-check-input').checked == false){
    resetCheckBox();
  }else if(i == 0 && document.querySelector('.form-check-input').checked == true){
    enableMinusButton();
  }
})


