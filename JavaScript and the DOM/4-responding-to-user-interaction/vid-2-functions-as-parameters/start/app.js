//The goal of this video module is to make the given list
//items uppercase when a user hovers the mouse over them

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
// first selecting the list 'li' items
//const listItems = document.querySelectorAll('li');
//now using event bubble to use the parent div with class 'list'

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});  
  
  
/*
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('mouseover', ()=> {
  listItems[i].textContent = listItems[i].textContent.toUpperCase();
  })
  listItems[i].addEventListener('mouseout', ()=> {
  listItems[i].textContent = listItems[i].textContent.toLowerCase();
  })  
}
*/

listDiv.addEventListener('mouseover', (event)=> {
  if (event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toUpperCase();
  }
})
listDiv.addEventListener('mouseout', (event)=> {
  if (event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toLowerCase();
    }
})