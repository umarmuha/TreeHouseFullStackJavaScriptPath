// CHALLENGE:
const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
];

console.log(movies.reduce((acc, cur) => [...acc, ...cur], []));

// CHALLENGE: 
const customerNames = [
  [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
  [ "Barry", "Wanda", "Jamal", "Hayden" ],
  [ "Portia", "Pam", "Philip" ]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// Write your code below


// CHALLENGE: Use reduce to combine the favoritebooks from all the users into one array.
const users = [{
    name: 'Samir',
    age: 27,
    favoriteBooks: [{
        title: 'The Iliad'
      },
      {
        title: 'The Brothers Karamazov'
      }
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks: [{
        title: 'Tenth of December'
      },
      {
        title: 'Cloud Atlas'
      },
      {
        title: 'One Hundred Years of Solitude'
      }
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks: [{
      title: 'Candide'
    }]
  }
];

// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
//console.log(users.map( user => user.favoriteBooks.map(book => book.title)).reduce((acc, cur) => [...acc, ...cur], []));

//console.log(users[0].favoriteBooks[0].title);

// First using map bevause we still want every single element but want to extract certain bits of information. In this case the favotitebooks
console.log(users.map(user => user.favoriteBooks.map(book => book.title)).reduce((acc, cur) => acc.concat(cur)));


/**
 * CHALLENGE
 * Using the reduce method, extract all the customer hobbies into their own array. 
 * Store the hobbies in the hobbies array. You can use the comments below for reference.
 * @returns {Array}
 */

const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
console.log(customers.map( customer => customer.personal.hobbies).reduce((acc, cur) => [...acc, ...cur]));
