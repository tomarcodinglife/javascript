console.log('------------------ 5th ------------------');

let div = document.createElement('div'); // Create a new div element
let DivText = document.createTextNode('Sujit Tomar'); // Create a text node
div.className = 'container'; // Set the class name of the div element
div.id = 'container'; // Set the id of the div element  
div.setAttribute('title', 'This is a new div element'); // Set the title attribute of the div element
div.style.backgroundColor = '#0f0f0f'; // Set the background color of the div element
div.style.color = '#fff'; // Set the text color of the div element
div.style.fontSize = '40px'; // Set the font size of the div element
div.appendChild(DivText); // Append the div element to the body of the document
document.body.appendChild(div); // Append the div element to the body of the document