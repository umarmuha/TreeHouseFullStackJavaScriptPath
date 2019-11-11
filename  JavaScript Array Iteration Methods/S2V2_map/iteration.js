// DEFINITION: You can use map to transform each item in an array into something else.


const strings = ['1','2','3','4','5'];
console.log(strings.map( string => parseInt(string, 10)));


// Output array wirh uppercase elements using Map() function
const fruits = ['apple', 'pear', 'cherry'];
console.log(fruits.map( fruit => fruit.toUpperCase()));

// Now to make only the first letter UpperCase
console.log(fruits.map( fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1)));


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;
abbreviatedDays = daysOfWeek.map(day => day.slice(0,3));
console.log(abbreviatedDays);