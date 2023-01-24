// implementazione funzione per la creazione degli elementi HTML 

export const createElement = (tag, className, id, content) => {
	const el = document.createElement(tag)
  el.className = className
  el.id = id
  el.innerHTML= content
  return el
}