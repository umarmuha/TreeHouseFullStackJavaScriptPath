const fruits = ['apple', 'pear', 'cherry'];

// // Using for loop to iterate and output all the objects of array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Using the forEach method to perform the same operation
// fruits.forEach(element => console.log(element));

// use forEach menthod to create a capitalized version of the array
// let uppercaseFruits = [];
// fruits.forEach(element => uppercaseFruits.push(element.toUpperCase()));
// console.log(uppercaseFruits);

// // Calculate the total pricing using forEach
// const prices = [6.75, 3.10, 4.00, 8.12];
// let sum = 0;
// prices.forEach(element => sum += element);
// console.log(sum);

// Reducing the array to a single sum using the reduce method.
// const prices = [6.75, 3.10, 4.00, 8.12];
// console.log(prices.reduce((a, b) => a + b, 0));

// /**
//  * @returns array with names starting with S only
//  */
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// let namesSelective = [];
// names.forEach(element => {
//     if (element.startsWith('S')) {
//         namesSelective.push(element);
//     }
// })
// console.log(namesSelective);


// Another inetresting way to use the ternary operator to accomnplish printing names that start with 'S'
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let namesSelective = [];
names.forEach(element => element.startsWith('S') ? namesSelective.push(element) : 0) // Push the names that start with 'S' when condition true
console.log(namesSelective);


const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];
numbers.forEach(element => times10.push(element * 10));
console.log(times10);