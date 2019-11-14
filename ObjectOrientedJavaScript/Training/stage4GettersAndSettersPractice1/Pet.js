/**
 * The main difference between getters and other methods is how they are accessed. 
 * Methods are called by adding parentheses after their names and can take arguments, 
 * but getters are called just by naming them (and can't have arguments). 
 * So in usage, getters seem to be more like properties than methods.
 * It allows you to create a "computed property" where some code is necessary to return the value. 
 * This allows you to have the data represented by a property and reserve methods for things that cause changes.
 */


class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound
    }

    //Using Getter method to creat dynamic property when invoked
    //This property does not show as part of the object and CAN'T have arguments
    get activity() {
        const today = new Date();
        const hour = today.getHours();
        if (hour > 8 && hour <= 20) {
            return `${this.animal} is playing right now`
        } else {
            return `${this.animal} is sleeping right now`
        }
    }

    get owner() {
        return this._owner;
    }
    set owner(owner) {
        this._owner = owner; //this in this line represents the property that will be added or updated on the object
        console.log(`setter called ${owner}`)
    }

    speak() {
        console.log(this.sound);
    }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip ');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
const scofield = new Pet('dog', 6, 'Doberman', 'dawg dawg');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer', 'cmon son!');

// ernie.speak();

// access the activity property like normal dot notation. Only gets
// calculated when invoked
// console.log(ernie.activity);

// The object does not show the acitivity property until its called directly
// console.log(ernie);

ernie.owner = 'Ashley';
console.log(ernie.activity);
console.log(ernie);




