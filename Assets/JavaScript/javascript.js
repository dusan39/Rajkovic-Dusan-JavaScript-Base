const plusButton = document.querySelector('#plus-button');
const minusButton = document.querySelector('#minus-button');
const resetButton = document.querySelector('#reset-button');
const checkMinus = document.querySelector('#form-check-input');
const counterContainer = document.querySelector('#counter-container');
let numberDisplay = document.querySelector('#counter-display');
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

counterContainer.addEventListener('click', function(e){
  const target = e.target;

  switch(true){
    case target == plusButton:
      plus();

      if(i == 1 && minusButton.disabled == true){
        enableMinusButton();
      }
      break;

    case target == minusButton:
      if(i > 0 || checkMinus.checked == true){
        minus();
      }else if(i == 0 || checkMinus.checked == false){
        disableMinusButton();
      }
      break;

    case target == checkMinus:
      if(i < 0 && checkMinus.checked == false){
        resetCheckBox();
      }else if(i == 0 && checkMinus.checked == true){
        enableMinusButton();
      }
      break;
    
    case target == resetButton:
      reset();
      if(minusButton.disabled == true){
        enableMinusButton();
      }
      break;
    }
})


