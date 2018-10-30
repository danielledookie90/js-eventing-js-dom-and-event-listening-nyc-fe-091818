//1. get the element 
 const main = document.querySelector('main')

//2. add an event listener
function onClick(event){
  alert('i was clicked woah')
}

main.addEventListener('click', onClick)

function onKeyDown(event){
  if (event.which === 74){
   event.preventDefault()
  }
}

const input = document.querySelector('input')

input.addEventListener('keydown', onKeyDown )


const divs = document.querySelectorAll('div')
console.log(divs)

function onDivClick(event){
  console.log(event)
}

for (let div of divs) {
  div.addEventListener('click',)
}