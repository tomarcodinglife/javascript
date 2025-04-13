let childFirst = document.querySelector('#sub-container01');
let childSecond = document.querySelector('#sub-container02');
let parent = childFirst.parentElement;

console.log(parent); // <div id="container">...</div>

parent.style.backgroundColor = '#0f0f0f0f'; // Change the background color of the parent element
childFirst.style.backgroundColor = 'green'; // Change the background color of the first child element
childSecond.style.backgroundColor = 'green'; // Change the background color of the first child element