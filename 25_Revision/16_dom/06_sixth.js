console.log('------------------ 6th ------------------');


function createElement (appendClassName, appendTagName, appendText){
    const element = document.createElement(appendTagName); // Create a new div element
    const elementText = document.createTextNode(appendText); // Create a text node
    element.appendChild(elementText); // Append the text node to the element
    document.querySelector(`.${appendClassName}`).appendChild(element); // Append element
}

function createUnorderList (appendClassName, listText, margin, padding, listStyleType, listclassName, listidName){
    const ulelement = document.createElement("ul"); // Create a new element
    const lielement = document.createElement("li"); // Create a new element
    const elementText = document.createTextNode(listText); // Create a text node

    lielement.appendChild(elementText); // Append the text node to the element
    ulelement.appendChild(lielement); // Append the text node to the element
    document.querySelector(`.${appendClassName}`).appendChild(ulelement); // Append element

    ulelement.style.listStyleType = listStyleType; 
    ulelement.style.padding = padding; 
    ulelement.style.margin = margin; 
    ulelement.className = listclassName; // Set the class name of the div element
    ulelement.id = listidName; // Set the id of the div element
}

function createOrderList (appendClassName, listText, margin, padding, listclassName, listidName){
    const element = document.createElement("ol"); // Create a new element
    const listItem = document.createElement("li"); // Create a new element
    const elementText = document.createTextNode(listText); // Create a text node

    listItem.appendChild(elementText); // Append the text node to the element
    element.appendChild(listItem); // Append the text node to the element
    document.querySelector(`.${appendClassName}`).appendChild(element); // Append element

    element.style.padding = padding; // Set the padding to 20px
    element.style.margin = margin; // Set the margin to 20px
    element.className = listclassName; // Set the class name of the div element
    element.id = listidName; // Set the id of the div element
}


function addListItem(listID, listText) {
    const listItem = document.createElement("li"); // Create a new list item
    const itemText = document.createTextNode(listText); // Create a text node
    listItem.appendChild(itemText); // Append the text node to the list item
    document.getElementById(listID).appendChild(listItem); // Append the list item to the list
}

// Create Elements

createElement('body', 'div', 'Sujit Tomar'); // Create a new div element
createUnorderList('body', "Sujit Kumar Singh", "20px", "20px", "disc", "mylist", "mylist01"); // Create a new element
createUnorderList('body', "Amar Singh", "20px", "20px", "disc", "mylist", "mylist02"); // Create a new element
createOrderList('body', "Sujit Kumar Singh", "20px", "20px", "odList", "olList01"); // Create a new element
createOrderList('body', "Rohit Singh", "20px", "20px", "odList", "oList02"); // Create a new element


// Add Elements

addListItem('mylist01', 'Rahul'); // Add a new list item to the unordered list
addListItem('mylist01', 'Sohan'); // Add a new list item to the unordered list
addListItem('mylist01', 'Aman'); // Add a new list item to the unordered list
addListItem('mylist01', 'Sohan'); // Add a new list item to the unordered list

// Edit Elements
const eleedit01 = document.querySelector("#mylist01 li:nth-child(2)"); // Select item
const newElement = document.createElement('li'); // Create a new element
newElement.textContent = "Samsher Singh"; // Create a text node
eleedit01.replaceWith(newElement); // Replace the old element with the new element

console.log(eleedit01); // Log the old element to the console

const eledit02 = document.querySelector("#mylist01 li:nth-child(3)"); // Select item
eledit02.innerHTML = "Maharana Ji"; // Edit the element

const eleedit03 = document.querySelector("#mylist01 li:nth-child(4)"); // Select item
eleedit03.outerHTML = "<li>Raja Singh</li>"; // Edit the element

// Delete Elements
const eleDelete = document.querySelector("#mylist01 li:nth-child(5)"); // Select item
eleDelete.remove(); // Delete the element


