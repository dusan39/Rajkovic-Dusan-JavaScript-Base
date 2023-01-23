/*const plusButton = document.querySelector('#plus-button');
const minusButton = document.querySelector('#minus-button');
const resetButton = document.querySelector('#reset-button');
const checkMinus = document.querySelector('#form-check-input');
const counterContainer = document.querySelector('#counter-container');
let numberDisplay = document.querySelector('#counter-display');
*/
let i = 0;

//title section
const titleContainer = document.createElement('div')
titleContainer.className = 'title-container'
document.body.appendChild(titleContainer)

const title = document.createElement('h1')
title.innerHTML = 'Calculator with JavaScript'
title.className = 'title'
titleContainer.appendChild(title)

// + 0 - section
const counterContainer = document.createElement('div')
counterContainer.id = 'counter-container'
document.body.appendChild(counterContainer)

const buttonsContainer = document.createElement('div')
buttonsContainer.className = 'buttons-container'
counterContainer.appendChild(buttonsContainer)

// +
const plusContainer = document.createElement('div')
plusContainer.className = 'plus-button-container'
buttonsContainer.appendChild(plusContainer)

const plusBtn = document.createElement('button')
plusBtn.innerHTML = '+'
plusBtn.id = 'plus-button'
plusContainer.appendChild(plusBtn)
// fine +

// 0 
const displayContainer = document.createElement('div')
displayContainer.className = 'display-counter-container'
buttonsContainer.appendChild(displayContainer)

const numberDisplay = document.createElement('h2')
numberDisplay.innerHTML = i
numberDisplay.id = 'counter-display'
displayContainer.appendChild(numberDisplay)
// 0 fine

// -
const minusContainer = document.createElement('div')
minusContainer.className = 'minus-button-container'
buttonsContainer.appendChild(minusContainer)

const minusBtn = document.createElement('button')
minusBtn.innerHTML = '-'
minusBtn.id = 'minus-button'
minusContainer.appendChild(minusBtn)
//- fine

// check e form
const functionContainer = document.createElement('div')
functionContainer.className = 'function-container'
counterContainer.appendChild(functionContainer)

const formCheck = document.createElement('div')
formCheck.className = 'form-check'
functionContainer.appendChild(formCheck)

const formCheckInput = document.createElement('input')
formCheckInput.type = 'checkbox'
formCheckInput.id = 'form-check-input'
formCheck.appendChild(formCheckInput)

const formCheckLabel = document.createElement('label')
formCheckLabel.innerHTML = 'Minus 0'
formCheckInput.id = 'form-check-label'
formCheck.appendChild(formCheckLabel)
// fine check e form

// reset 
const resetContainer = document.createElement('div')
resetContainer.className = 'reset-button-container'
functionContainer.appendChild(resetContainer)

const resetBtn = document.createElement('button')
resetBtn.innerHTML = 'Reset'
resetBtn.id = 'reset-button'
resetContainer.appendChild(resetBtn)

// fine reset

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
  formCheckInput.checked = false;
}

function disableMinusButton(){
  minusBtn.disabled = true;
  minusBtn.style.opacity = '0.5'
}

function enableMinusButton(){
  minusBtn.disabled = false;
  minusBtn.style.opacity = '1'
}

function resetCheckBox(){
  i = 0;
  numberDisplay.innerHTML = i;
}

counterContainer.addEventListener('click', function(e){
  const target = e.target;

  switch(true){
    case target == plusBtn:
      plus();

      if(i == 1 && minusBtn.disabled == true){
        enableMinusButton();
      }
      break;

    case target == minusBtn:
      if(i > 0 || formCheckInput.checked == true){
        minus();
      }else if(i == 0 || formCheckInput.checked == false){
        disableMinusButton();
      }
      break;

    case target == formCheckInput:
      if(i < 0 && formCheckInput.checked == false){
        resetCheckBox();
      }else if(i == 0 && formCheckInput.checked == true){
        enableMinusButton();
      }
      break;
    
    case target == resetBtn:
      reset();
      if(minusBtn.disabled == true){
        enableMinusButton();
      }
      break;
    }
})


