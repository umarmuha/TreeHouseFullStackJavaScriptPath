/**
 * Create a variable called myString. 
 * Set myString to an object literal that has a property 
 * string whose value is "Programming with Treehouse is fun!"
 * 
 * Add a method to the object literal called countWords(). 
 * countWords() should return the number of individual words in the string property.
 * 
 * After the object literal, create a variable called numWords 
 * and set it the return value from the countWords() method using either dot or bracket notation.
 * 
 * After the object literal, create a new property (using dot OR bracket notation) called characters. 
 * This property should be set to the number of characters in the phrase held in the string property.
 * 
 * After the object literal, change the value of myString's string property to "I love full stack JavaScript".
 */

let myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function () {
        return this.string.split(' ').length;
    }
}
myString.string = "I love full stack JavaScript";

myString.characters = myString.string.length;

let numWords = myString.countWords();

console.log(myString.characters, numWords)