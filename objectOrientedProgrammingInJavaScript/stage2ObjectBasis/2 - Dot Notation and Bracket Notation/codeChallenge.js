// ** Code Challenge Practice Object Basics in JavaScript **
const myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function () {
        // Treehouse way
        //const wordArray = myString.string.split(' ');
        //return wordArray.length;

        // My attempt 
        return this.string.split(" ").length;
    }
}
myString.string = "I love full stack JavaScript";
var numWords = myString.countWords();

// Create a new property called characters
myString.characters = myString.string.length;

// With dot notation
console.log(myString.countWords());
// With bracket notation
console.log(myString['countWords']());
// Output the object
console.log(myString.characters);


// Encapsulation describes consolidating an object’s properties and methods into a package and attaching it to a variable. 