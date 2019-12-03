// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 3 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price


// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.


// 4. Call the listProducts() function and log the returned value to the console.


// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. 
// You calculate the value of one product by multiplying the inventory value by the unit_price value


// 6. Call the totalValue() function and log the returned value to the console.


// 7. Run your code by typing node 3_final_products.js in the console below

let products = [
    {
        name: 'Table',
        inventory: '3',
        unit_price: '20'
    },{
        name: 'Chair',
        inventory: '5',
        unit_price: '30'
    },{
        name: 'Lamp',
        inventory: '10',
        unit_price: '10'
    }
]


function listProducts(array) {
    let list = []
    for (const product of array) {
        list.push(product.name)
    }
    console.log(list);
}

listProducts(products);

// To find total price of EACH individual product
// function totalValue(array) {
//     for (const product of array) {
//         total = product.unit_price * product.inventory
//         console.log(`Total Value of ${product.name} is $${total}`)
//     }
// }

// To find the TOTAL price of ALL products
function totalValue(array) {
    let total = 0;
    for (const product of array) {
        total += product.unit_price * product.inventory
    }
    console.log(`Total Value of all inventory is $${total}`)
}

totalValue(products);
