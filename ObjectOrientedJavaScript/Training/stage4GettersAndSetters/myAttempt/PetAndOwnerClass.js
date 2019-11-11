/*
  Create a Pet class with animal, age, breed and sound arguments
  Add a speak() method
  Create a get() method to find the activity of the animal based on the time of day
  Create an Owner Class asking for name, address and phone#
*/
class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound
  } // end constructor

  speak() {
    console.log(`${this.animal} is making ${this.sound}`)
  }; // end speak

  get activity() {
    let today = new Date();
    let hour = today.getHours();
    if (hour >= 8 && hour <= 20) {
      return `${this.animal} is playing`;
    } else {
      return `${this.animal} is sleeping`;
    }
  }; // end activity
}; // end Pet class

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }; // end getter

  set phoneNumber(phoneNumber) {
    const phoneNumberNormalized = phoneNumber.replace(/[^0-9]/g, '');
    this._phoneNumber = phoneNumberNormalized;
  }; // end setter

}; // end Owner class


const rex = new Pet('dog', 2, "dobberman", "woof");

// ***The property of an object can be another object***
rex.owner = new Owner("John", "1234 Main St.");
rex.owner.phoneNumber = "517-999-8766";

//console.log(rex.activity);
console.log(`\n My pet is a ${rex.animal}. It is ${rex.age} years old. Its a ${rex.breed} and it loves to make ${rex.sound} sound. My ${rex.activity} right now \n`);
console.log(`\n ${rex.owner.phoneNumber} \n`);