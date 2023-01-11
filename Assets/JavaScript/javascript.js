/*if sul click dei bottoni 
3 case

1 = +
i++ 
innerhtml
break

2 = -
i--
innerhtml
break

3 = reset
x = 0
innerhtml
break

aggiungere controllo sul meno quando il valore è zero
*/
let i = 0
const btn = document.querySelectorAll('button') // selezionato tutti gli elementi bottone della pagina

btn.forEach((e) =>{
  switch(e){
    case '+':
      i++
      document.getElementsByClassName('counter-display').innerHTML = i;
      break;
    case '-':
      i--
      document.getElementsByClassName('counter-display').innerHTML = i;
      break;
    case 'Reset':
        i = 0
        document.getElementsByClassName('counter-display').innerHTML = i;
        break;
  }
})




