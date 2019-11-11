const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

// Use filter to generate an array without Samir
console.log(users.filter(user => user.name !== 'Samir'));

// Use map to show how old each user is
// Like 'Samir is 27 years old'
console.log(users.map(user => `${user.name} is ${user.age} years old`));


// User reduce to make the value of 'name' Property and the value of 'age' value in a new object
console.log(users.reduce( (userObject, user) => {
  userObject[user.name] = user.age;
  return userObject;
}, {} ));

/**
 * Using the map method on the authors array, create an array of full name strings, 
 * comprising the first name, then a space, then the last name. 
 * See the comments below for reference. Store the new array in the fullAuthorNames variable.
 */
const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

console.log(authors.map(element => `${element.firstName} ${element.lastName}`));