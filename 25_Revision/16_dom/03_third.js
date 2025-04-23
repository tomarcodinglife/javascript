let container = document.querySelector('.container');
let firstChild = container.firstElementChild
let lastChild = container.lastElementChild
let middleChild = container.children[1]


console.log(firstChild) 
console.log(lastChild) 
console.log(middleChild) 

firstChild.style.backgroundColor = 'red'
lastChild.style.backgroundColor = 'blue'
middleChild.style.backgroundColor = 'green'