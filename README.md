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
### Function plus()

Questa funzione permette di incrementare la nostra variabile **i** che inizialmente avrà valore 0, semplicemente quando viene attivata questa funzione viene incrementato di 1 alla volta il valore di **i** tramite il tasto plusButton a cui è stato aggiunto un EventListener al suo click fa scaturire la funzione e quando si arriva al caso **i = 0** e il tasto **minusButton** è disabilitato allora fa partire un'altra funzione che verrà descritta in seguito. 

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

### Function minus()

Questa funzione permette di decrementare la nostra variabile **i** , semplicemente quando viene attivata questa funzione viene decrementato di 1 alla volta il valore di **i** tramite il tasto minusButton a cui è stato aggiunto un EventListener al suo click fa scaturire la funzione e quando si arriva al caso che il valore di i = 0 allora 

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




