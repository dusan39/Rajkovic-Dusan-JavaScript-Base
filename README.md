# Calculator with JavaScript 

Questo progetto è stato realizzato con l'utilizzo di :

> <img src="https://img.icons8.com/color/24/null/html-5--v1.png"/> HTML

> <img src="https://img.icons8.com/color/24/null/sass.png"/> SCSS

> <img src="https://img.icons8.com/color/24/null/javascript--v1.png"/> JavaScript

![GitHub last commit](https://img.shields.io/github/last-commit/dusan39/Rajkovic-Dusan-JavaScript-Base)

## Cosa troverete in questo file

- Funzionalità
- Implementazione HTML tramite JavaScript

## Funzionalità

Questo progetto prevede una semplice funzionalità di counter tramite due bottoni + e - che aggiornano in tempo reale un valore nella sezione display, oltre a questi elementi descritti ci sono 2 altre aggiunte che introducono delle piccole possibilità di gestire certe casistiche, ovvero un bottone reset che riporta tutti gli elementi allo stato di default e l'altro elemento aggiunto è una checkbox che permette al counter di andare sotto lo zero quando avviene il check.  

<img width="505" alt="calculator" src="https://user-images.githubusercontent.com/114413164/213029079-6028825c-e7b1-4bc9-8a0d-0cc02f07df01.png">


### Implementazione HTML tramite JavaScript

Per questa parte qua ho creato un file esterno dove ho dichiarato la funzione per creare tutti gli elementi con esse senza avere niente nel body, questa poi è stata esportata nel file .js principale dove semplicemente passandogli tag, nome della classe, id e cosa deve esserci all'interno di quell'elemento,  riesce a creare l'elemento HTML.

```JavaScript
export const createElement = (tag, className, id, content) => {
  const el = document.createElement(tag)
  el.className = className
  el.id = id
  el.innerHTML= content
  return el
}
}
```
Sotto troverete l'esempio di una funzione utilizzata per creare l'elemento div passandogli semplicemente il valore tag e className:

```JavaScript
const counterContainer = createElement('div', 'counter-container', '', '')
document.body.appendChild(counterContainer)
```

### EventListener sull'intero div con target

Questo eventListener è stato aggiunto su tutto il div dove sono presenti possibili click, per capire cosa far scaturire al momento del click è stata creata una costante target che tramite uno switch confronta tutte le possibile casistiche finchè non trova quella in questione e quindi fa partire le varie funzioni presenti all'interno.

```JavaScript
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
```

### Funzioni 

Le funzioni utilizzate per questo progetto sono:

- plus() = incrementa la variabile **i** di uno e assegna il suo valore al campo display per la visualizzazione.

```JavaScript
function plus(){
  i++;
  numberDisplay.innerHTML = i;
}
```

- minus() = decrementa la variabile **i** di uno e assegna il suo valore al campo display per la visualizzazione.

```JavaScript
function minus(){
  i--;
  numberDisplay.innerHTML = i;
}
```

- reset() = assegna il valore a 0 ad i, poi lo passa al campo display ed infine se la checkbox è attiva viene disabilitata.


```JavaScript
function reset(){
  i = 0;
  numberDisplay.innerHTML = i;
  if(formCheckInput.checked == true){
    formCheckInput.checked = false;
  }
}
```

- disableMinusButton() = in base a che casistica si trova il contatore questa funzione permette di disabilitare il bottone meno e anche a livello grafico dargli un effetto per far capire che è disattivo.

```JavaScript
function disableMinusButton(){
  minusBtn.disabled = true;
  minusBtn.style.opacity = '0.5'
}
```

- enableMinusButton() = in base a che casistica si trova il contatore questa funzione permette di abilitare il bottone meno e a livello grafico toglie lo stile aggiunto dalla funzione disable per far capire che è possibile riutilizzare il bottone.

```JavaScript
function enableMinusButton(){
  minusBtn.disabled = false;
  minusBtn.style.opacity = '1'
}
```

- resetCheckBox() = questa funzione può essere vista come una copia del tasto reset però è diverso perchè questa funzione viene lanciata solamente quando si decide di non volere più utilizzare il contatore sotto lo 0 e quindi ti riporta il valore display però se disabilitiamo la checkbox e siamo sopra lo zero non succede niente.

```JavaScript
function resetCheckBox(){
  i = 0;
  numberDisplay.innerHTML = i;
}
```

### Rimozione zoom su mobile e tablet

Per quanto riguarda la versione mobile ho voluto rimuovere lo zoom con il doppio click sullo schermo perchè utilizzando i bottoni velocemente si va incontro al fastidioso caso in cui si fa lo zoom sullo schermo e poi rende difficile l'utilizzo del counter, tramite questa semplice aggiunta nel css si risolve questa problematica.

```CSS
  * {
    touch-action: manipulation;
  }
```
