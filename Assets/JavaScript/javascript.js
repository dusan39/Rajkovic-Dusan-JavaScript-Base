// importazione funzioni per la creazione degli elementi HTML tramite JS
import {
  createElement
} from './createHTML.js';

// dichiarazione variabile che verrà utilizzata per incrementare o decrementare il contatore 
let i = 0;

// Inizio sezione title
const titleContainer = createElement('div', 'title-container', '')
document.body.appendChild(titleContainer)

const title = createElement('h1', 'title', 'Calculator with JavaScript')
titleContainer.appendChild(title)
// Fine sezione title

// Container principale
const counterContainer = createElement('div', 'counter-container', '')
document.body.appendChild(counterContainer)

// Container dei tasti + e - ed anche il valore display 
const buttonsContainer = createElement('div', 'buttons-container', '')
counterContainer.appendChild(buttonsContainer)

// Inizio bottone +
const plusContainer = createElement('div', 'plus-button-container', '')
buttonsContainer.appendChild(plusContainer)

const plusBtn = createElement('button', 'plus-button', '+')
plusContainer.appendChild(plusBtn)
// Fine bottone +

// Inizio sezione display 
const displayContainer = createElement('div', 'display-counter-container', '')
buttonsContainer.appendChild(displayContainer)

const numberDisplay = createElement('h2', 'counter-display', i)
displayContainer.appendChild(numberDisplay)
// Fine display value

// Inizio sezione bottone -
const minusContainer = createElement('div', 'minus-button-container', '')
buttonsContainer.appendChild(minusContainer)

const minusBtn = createElement('button', 'minus-button', '-')
minusContainer.appendChild(minusBtn)
// Fine sezione bottone -

// Container checkbox e bottone reset
const functionContainer = createElement('div', 'function-container', '')
counterContainer.appendChild(functionContainer)

// Inizio sezione checkbox
const formCheck = createElement('div', 'form-check', '')
functionContainer.appendChild(formCheck)

const formCheckInput = createElement('input', 'form-check-input', '')
formCheckInput.type = 'checkbox'
formCheck.appendChild(formCheckInput)

const formCheckLabel = createElement('div', 'form-check-label', 'Minus 0')
formCheck.appendChild(formCheckLabel)
// Fine sezione checkbox

// Inizio sezione reset
const resetContainer = createElement('div', 'reset-button-container', '')
functionContainer.appendChild(resetContainer)

const resetBtn = createElement('button','reset-button', 'Reset')
resetContainer.appendChild(resetBtn)
// Fine sezione reset

// Implementazioni funzioni per il calcolatore
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
  if(formCheckInput.checked == true){
    formCheckInput.checked = false;
  }
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

// event listener al container generale dove alla costante 'target' e uno switch in base al click capisce che funzione attivare a quel particolare bottone
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