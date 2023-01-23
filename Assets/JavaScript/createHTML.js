// implementazione funzioni per la creazione degli elementi HTML 
export function createContainer(id){
  const div = document.createElement('div')
  div.id = id
  return div
}

export function createTitle(className){
  const h1 = document.createElement('h1')
  h1.className = className
  return h1
}

export function createButton(id){
  const btn = document.createElement('button')
  btn.id = id
  return btn
}

export function createDIsplayNumber(id){
  const h2 = document.createElement('h2')
  h2.id = id
  return h2
}

export function createCheckBox(id){
  const formCheckInput = document.createElement('input')
  formCheckInput.type = 'checkbox'
  formCheckInput.id = id
  return formCheckInput
}

export function createLabel(id){
  const formCheckLabel = document.createElement('label')
  formCheckLabel.innerHTML = 'Minus 0'
  formCheckLabel.id = id
  return formCheckLabel
}