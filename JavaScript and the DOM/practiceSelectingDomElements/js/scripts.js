// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.getElementById('about');
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const heading = document.getElementsByTagName("h2");
//heading will be an array like object so we will have to use a loop
//to iterate through all the elements 
for (let i = 0; i < heading.length; i++) {
    heading[i].style.color = 'slateblue';
}


// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
const card = document.getElementsByClassName('card');
for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = 'seashell';
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
// use querySelector which will only select the first element of the type and NOT
//querySelectorAll method
const ul = document.querySelector('ul');
for (let i = 0; i < ul.length; i++) {
    ul[i].style.border = "2px solid indigo";    
}


// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.getElementsByClassName('container')[1];
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
// use querySelectorAll method since it returns a 
// Node list of all the matching elements and then iterate
// all those element using a loop
const titleLink = document.querySelectorAll('a[title]');
for (let i = 0; i < titleLink.length; i++) {
    titleLink[i].style.color = 'salmon';
}

/*
const title = document.getElementsByTagName("h1");
for (let i = 0; i < title.length; i++) {
    title[i].style.color = 'white';
}
*/

//One way to select the heading and change the color
//const jumbotron = document.getElementById('jumbotron');
//jumbotron.style.color = 'salmon';

//This way was not working eatlier for me
//tried again and it works. This is the simpler and
//recommended way
const jumbotron = document.querySelector('h1');
jumbotron.style.color = "purple";