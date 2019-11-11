class Pet {
  constructor (animal,age,breed,sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak(){
    console.log(this.sound);
  }
}

const rex = new Pet('dog', 2, 'puma', 'woof woof');
const chirp = new Pet('bird', 1, 'angryBrid', 'chirp chirp');
const vera = new Pet('dog',8,'Border Collie', 'bak bak');

console.log(rex.sound);

rex.speak();