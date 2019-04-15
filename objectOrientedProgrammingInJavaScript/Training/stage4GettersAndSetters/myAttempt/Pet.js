class Pet {
  constructor (animal,age,breed,sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity () {
    let today = new Date();
    let hour = today.getHours();
    if (hour >= 8 && hour <= 20) {
      return `My ${this.animal} is playing right now!`;
    } else {
      return `My ${this.animal} is sleeping right now!`;
    }
  };

  get owner(){
    return this._owner;
  };
  
  set owner(owner){
    this._owner = owner;
  };

  speak(){
    console.log(`My ${this.animal} is saying ${this.sound}`);
  }
}

const rex = new Pet('dog', 2, 'puma', 'woof woof');
const chirp = new Pet('bird', 1, 'angryBrid', 'chirp chirp');
const vera = new Pet('dog',8,'Border Collie', 'bak bak');

console.log(rex.sound);

rex.speak();

console.log(rex.activity);

rex.owner = 'Umar';
console.log(rex.owner);
