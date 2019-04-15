// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');

//h1.innerHTML = "Manipulate DOM Elements";
h1.textContent = "My Activities List";

// 2: Set the color of the <h1> to a different color
h1.style.color = "salmon";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const p = document.querySelector('p');
p.innerHTML = 'This exercise we will practice how to <mark class="red">manipulate</mark> the DOM';

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
let item = document.createElement('li');
item.innerHTML = "<input>\nRe-play the song\n";
ul.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
const inputElements = document.querySelectorAll('input');
for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement('button');
const extra = document.querySelector('.extra');

deleteButton.innerHTML = "<h3>DELETE</h3>";
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

//I wrote this code below thinking that its a separate <div> node sitting
//outside in the document. 
//deleteButton.addEventListener('click', () => {
//    extra.outerHTML = "";
//})

//The '.extra' <div> element is inside the '.container' <div> so now we can make
//the '.container' as the Parent and '.extra' as the child and use removeChild method
const container = document.querySelector('.container');
deleteButton.addEventListener('click', ()=> {
    container.removeChild(extra);
})

