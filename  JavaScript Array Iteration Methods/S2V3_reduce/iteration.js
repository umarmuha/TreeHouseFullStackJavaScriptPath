const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let total = 0;

prices.forEach(price => {
    total += price;
});

console.log(`The total with for loop is ${total}`);

// Use reduce instead of the for loop to collection the sum of prices

console.log(prices.reduce(
    ((acc, cur) => acc + cur), 0
));

// Return the total of names that start with "G"
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
namesWithG = names.reduce((acc, name) => acc + (name.startsWith('G') ? 1 : 0), 0);
console.log(`Total # of names that start with G are ${namesWithG}`);
// Result: 4


const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

console.log(phoneNumbers.reduce( (acc, number) => acc + (number.startsWith('(503)') ? 1 : 0), 0)); //answer 3



