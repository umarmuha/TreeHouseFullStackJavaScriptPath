const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// let sNames = [];

// names.forEach(name => {
//   if(name.charAt(0) === 'S') {
//     sNames.push(name);
//   }
// });

// console.log(sNames);

// Print names strating only with S using filter() function
console.log(names.filter(name => name.startsWith('S')));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Result: [2,4,6,8,10]
console.log(numbers.filter(number => number % 2 === 0));

// Return an array of only the years in the twentieth century (includes 2000)
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter(year => year <= 2000).sort((a, b) => a - b);
console.log(century20);


/**
 * Removing Duplicates from an Array
To remove duplicate elements from an array, we can use filter(). 
Remember, the filter method provides three parameters to our callback function: 
the current element being processed in the array, 
the index of the current element being processed in the array, and the array filter() was called upon.
We can compare the index of the current element to the index of the current element in the array that filter() 
was called upon to determine if we've already encountered that element value. 
This works because the indexOf method will return the index of the first occurrence that is found in the array. 
So, indexes of duplicate elements will not equal the index of the first occurrence of their values.
 */
const numberArray = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

console.log( numberArray.filter((number, index) => numberArray.indexOf(number) === index ));