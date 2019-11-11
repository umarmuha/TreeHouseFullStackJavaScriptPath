const arr = [1,2,3];

const smallerArr = arr.filter(number => number !== 2);
const incrementedArr = smallerArr.map(number => number + 1);

console.log(incrementedArr); // => [2,4]

// Chained version
console.log( arr.filter( number => number !== 2).map(number => number + 1)); // [2,4]

// Use filter to get the 21st century years and then use map to convert to string by
// concatinating with "A.D."
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

console.log((years.filter(year => year >= 2001).map(year => year + " A.D.")));