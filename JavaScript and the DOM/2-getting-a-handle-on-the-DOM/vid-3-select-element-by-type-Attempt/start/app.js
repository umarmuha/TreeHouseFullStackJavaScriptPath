const myList = document.getElementsByTagName('li');

//No need to create an array.
//Can simply use a for loop to make all the 'li' items purple color. 
//Just wanted to try and see if the array would work 
arry = [];
for (let i = 0; i < myList.length; i++) {
  arry.push(myList[i]);  
}

//Now that we have an arrray, we can make indivudual array items diffetent colors. 
//arry[0].style.color = 'green'

arry.forEach(element => {
  element.style.color = 'purple';
});

