let plusButton = document.querySelector('.plus-button');
let minusButton = document.querySelector('.minus-button');
let resetButton = document.querySelector('.reset-button');
let numberDisplay = document.querySelector('.counter-display');
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
}

function disableMinusButton(){
  document.querySelector('.minus-button').disabled = true;
  minusButton.style.color = 'green';
}

function enableMinusButton(){
  document.querySelector('.minus-button').disabled = false;
}


plusButton.addEventListener('click', () =>{
  plus();

  if(i >0){
    enableMinusButton();
    minusButton.style.color = 'white';
  }
})

minusButton.addEventListener('click', () =>{
  if(i > 0){
    minus();
  }else{
    disableMinusButton();
  }
})

resetButton.addEventListener('click', () =>{
  reset();
})


