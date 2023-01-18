# Calculator with JavaScript  ![GitHub last commit](https://img.shields.io/github/last-commit/dusan39/Rajkovic-Dusan-JavaScript-Base)

Questo progetto è stato realizzato con l'utilizzo di :

> <img src="https://img.icons8.com/color/24/null/html-5--v1.png"/> HTML

> <img src="https://img.icons8.com/color/24/null/sass.png"/> SCSS

> <img src="https://img.icons8.com/color/24/null/javascript--v1.png"/> JavaScript


## Cosa troverete in questo file

- Funzionalità
- Logiche delle funzioni implementate
- Tools utilizzati

## Presentazione funzionalità

Questo progetto prevede una semplice funzionalità di counter tramite due bottoni + e - che aggiornano in tempo reale un valore nella sezione display, oltre a questi elementi descritti ci sono 2 altre aggiunte che introducono delle piccole possibilità di gestire certe casistiche, ovvero un bottone reset che riporta tutti gli elementi allo stato di default e l'altro elemento aggiunto è una checkbox che permette al counter di andare sotto lo zero quando avviene il check.  

<img width="505" alt="calculator" src="https://user-images.githubusercontent.com/114413164/213029079-6028825c-e7b1-4bc9-8a0d-0cc02f07df01.png">

## Logiche delle funzioni implementate

### Dichiarazione variabili

Queste sono le variavili utilizzate all'interno del codice Js, per puntare a questi elementi nell'HTML ho utilizzato il querySelector passandogli il nome della classe d'interesse.

```JavaScript
let plusButton = document.querySelector('.plus-button');

let minusButton = document.querySelector('.minus-button');

let resetButton = document.querySelector('.reset-button');

let numberDisplay = document.querySelector('.counter-display');

let checkMinus = document.querySelector('.form-check-input');

let i = 0;
```
### Plus()

Questa funzione permette di incrementare la nostra variabile **i** che inizialmente avrà valore 0, semplicemente quando viene attivata questa funzione viene incrementato di 1 alla volta il valore di **i** tramite il tasto plusButton a cui è stato aggiunto un EventListener al suo click fa scaturire la funzione e quando si arriva al caso **i = 1** e il tasto **minusButton** è disabilitato allora fa partire un'altra funzione che riabilita il tasto minusButton che viene disattivato in una certa condizione che viene spiegata nella sezione **Function plus()**

```JavaScript
function plus(){
  i++;
  numberDisplay.innerHTML = i;
}

function enableMinusButton(){
  document.querySelector('.minus-button').disabled = false;
  minusButton.style.opacity = '1'
}

plusButton.addEventListener('click', () =>{
  plus();

  if(i == 1 && document.querySelector('.minus-button').disabled == true){
    enableMinusButton();
  }
})
```

### Minus()

Questa funzione permette di decrementare la nostra variabile **i** , semplicemente quando viene attivata questa funzione viene decrementato di 1 alla volta il valore di **i** tramite il tasto minusButton a cui è stato aggiunto un EventListener al suo click fa scaturire la funzione e quando si arriva al caso che il valore di i > 0 oppure la checkbox che abilita il counter di andare sotto lo zero è attiva sennò se i = 0 e la checkbox è disattiva parte una disable sul tasto minusButton e anche a livello grafico avviene una modifica così da far capire che quel tasto non può essere riutilizzato fino a quando il valore di i non diventa 1 oppure che si abiliti la checkbox. 

```JavaScript
function minus(){
  i--;
  numberDisplay.innerHTML = i;
}

function disableMinusButton(){
  document.querySelector('.minus-button').disabled = true;
  minusButton.style.opacity = '0.5'
}

minusButton.addEventListener('click', () =>{
  if(i > 0 || document.querySelector('.form-check-input').checked == true){
    minus();
  }else if(i == 0 || document.querySelector('.form-check-input').checked == false){
    disableMinusButton();
  }
})
```

### Reset()

Queste due funzioni che si scatenano in certi casi permettono di resettare certi valori:

- la **function reset()** viene scaturita al click del bottone reset che di defaul riporta a 0 il valore che viene visualizzato a display e toglie la flag alla checkbox se è presente
- la **function resetCheckBox** viene lanciata in un caso specifico ovvero quando siamo nella parte sotto lo zero del counter e decidiamo di togliere la possibilità di andare sotto lo zero quindi la funzione riporta il valore di i a 0 e invece se siamo nella fase in cui i = 0 e c'è la flag sulla checkbox allora abilita il counter negativo 

```JavaScript
function reset(){
  i = 0;
  numberDisplay.innerHTML = i;
  document.querySelector('.form-check-input').checked = false;
}

function resetCheckBox(){
  i = 0;
  numberDisplay.innerHTML = i;
}

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
```

