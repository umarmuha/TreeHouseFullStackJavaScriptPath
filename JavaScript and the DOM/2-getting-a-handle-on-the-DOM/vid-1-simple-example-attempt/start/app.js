const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myButton2 = document.getElementById('myButton2');
const myTextInput = document.getElementById('myTextInput');
const bgTextInput = document.getElementById('bgTextInput');
const bgButton = document.getElementById('bgButton');

//myHeading.addEventListener('click', () => {myHeading.style.color = "red"})


//Use the value property to get the text that has been entered into an input element. 
//For example, if you have a text input stored in a variable myInput, 
//you can retrieve any text the user has typed into that input like this:
//myInput.value

myButton.addEventListener('click', () => myHeading.style.color = myTextInput.value)
myButton2.addEventListener('click', () => myHeading.style.color = "black")
bgButton.addEventListener('click', () => myHeading.style.backgroundColor = bgTextInput.value)

