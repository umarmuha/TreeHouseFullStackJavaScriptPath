// This example is taken from https://tylermcginnis.com/beginners-guide-to-javascript-prototype/

// Showcasing a simple JS Object and its properties
let animal = {};
animal.name = 'Neo';
animal.energy = 10;

animal.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

animal.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
};

animal.playing = function (length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
};