const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function () {
        console.log('Woof!');
    }
}

// Accessing properties using the dot notation
ernie.age = 2;
ernie.color = 'brown';
ernie.bark();

// console.log(ernie); // Shows that the color property has been added to the object


// Using Bracket Notation to access properties
console.log(ernie['age']);
console.log(ernie['color']);
ernie['bark'](); // Pay attentioned to the method invocation putting () after the ['']

// If property is assigned to a variable, it can use displeyd using dot notation without qoutations, exmaple
let myDog = 'breed';
console.log(ernie[myDog]);