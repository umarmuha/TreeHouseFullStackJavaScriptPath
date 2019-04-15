/* INSTRUCTIONS
To run this file, click in the Console below and type: node 1_create_array.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create a new array named languages that contains at least 7 programming languages.
let languages = ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Swift', 'Ruby'];

// 2. Use console.log to display the number of elements in the array:
console.log(languages.length);

/* 3. Use console.log to list the first element from the array using an index value. */
console.log(languages[0]);

/* 4. Use console.log to list the last element from the array using an index value. */
console.log(languages[languages.length - 1]);

// 5. Use an array method to add an element to the END of the array.
languages.push('Go');

// 6. Use an array method to add an element to the BEGINNING of the array.
languages.unshift('Erlang');

/* 7. Log all of the elements in the array as a single string using the array .join() method */
console.log(languages.join(', '));

// 8. Use an array method to REMOVE the LAST element from the array.
console.log(languages.pop());

// 9. Use an array method to REMOVE the first element from the array.
console.log(languages.shift());

/* 10. Log all of the elements in the array as a single string using the array .join() method. Thisis the same as step 7 above */
console.log(languages.join(', '));

// Run your code by typing node 1_create_array.js in the console below