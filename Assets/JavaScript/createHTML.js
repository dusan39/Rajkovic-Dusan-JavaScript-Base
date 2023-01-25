// implementazione funzione per la creazione degli elementi HTML 

export const createElement = (tag, id, content) => {
	const el = document.createElement(tag)
  el.id = id
  el.innerHTML= content
  return el
}