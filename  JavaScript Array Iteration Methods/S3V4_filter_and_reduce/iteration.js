const products = [{
    name: 'hard drive',
    price: 59.99
  },
  {
    name: 'lighbulbs',
    price: 2.59
  },
  {
    name: 'paper towels',
    price: 6.99
  },
  {
    name: 'flatscreen monitor',
    price: 159.99
  },
  {
    name: 'cable ties',
    price: 19.99
  },
  {
    name: 'ballpoint pens',
    price: 4.49
  },
];

/**
 * Find products that are under $10 and then find the highest price among those 
 * @returns {object}
 * Result: { name: 'paper towels', price: 6.99 }
 * */
console.log(products.filter(product => product.price < 10).reduce((acc, cur) => acc.price > cur.price ? acc : cur));

/**
 * EXPLANATION:
 * acc.price > cur.price ? acc : cur, 
 * NOTE: no need to give acc a starting value since we are comparing the existing objetcs 
 * and not creating a new different one {name: 0, price: 0}
 * For more info see teacher notes https://teamtreehouse.com/library/combining-filter-and-reduce
 * Since we are returning an object, we have to make sure that accumultor
 * has an intial setup of an object. Now this condition is comparing the value of .price
 * property of the current object with the initial accumultor object. 

 First iteration:
  { name: 'lighbulbs', price: 2.59 } vs { name: 'paper towels', price: 6.99 }
  acc.price = 2.59 (Since accumulator takes on the value returned in the previous iteration)
  cur.price = 6.99
  2.59 > 6.99 => FALSE
  return current object { name: 'paper towels', price: 6.99 }

Third iteration:
  { name: 'paper towels', price: 6.99 } vs { name: 'ballpoint pens', price: 4.49 }
  acc.price = 6.99 (again accumulator takes on the value returned in the previous iteration)
  cur.price = 4.49
  6.99 > 4.49 => TRUE
  return object stores in accumulator { name: 'paper towels', price: 6.99 }
 */


 // Task: return the sum of the price for all the products that have price over $10
 (products.filter(product => product.price > 10).reduce((acc, cur) => acc.price + cur.price));

 // --WRONG Approach--
 // Since no initial value defined for accumulator
 // at start acc = { name: 'hard drive', price: 59.99 } and cur (current value) = { name: 'flatscreen monitor', price: 159.99 }
 // Sum all the values of the .price properties and that will provide the solution 

 //--RIGHT Approach--
 // Since the final sum we need is a number, if we give accumulator an initial value that is an object
 // the answer would be NAN. So for this task we MUST give accumulator an initial value of 0.
 console.log(products
   .filter(product => product.price > 10)
   .reduce((acc, cur) => acc + cur.price, 0)
   .toFixed(2)
 );


/**
 * Using the filter and reduce methods on the purchaseItems array, 
 * add the total price of all the groceries (items with a dept. of groceries). 
 * Store the total price in the groceryTotal variable. 
 * The correct amount can be seen in the comments below.
 * @returns {number}
 */
const purchaseItems = [{
    name: 'apples',
    dept: 'groceries',
    price: 2.49
  },
  {
    name: 'bread',
    dept: 'groceries',
    price: 2.99
  },
  {
    name: 'batteries',
    dept: 'electronics',
    price: 5.80
  },
  {
    name: 'eggs',
    dept: 'groceries',
    price: 3.99
  },
  {
    name: 't-shirts',
    dept: 'apparel',
    price: 9.99
  }
];
let groceryTotal;

// groceryTotal should be: 9.47
// Write your code below
console.log(purchaseItems.filter(item => item.dept === 'groceries').reduce((acc, cur) => acc + cur.price, 0));