class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound
        this.activity = function () {
            const today = new Date();
            const hour = today.getHours();
            if (hour > 8 && hour <= 20) {
                return `${this.animal} is playing right now`
            } else {
                return `${this.animal} is sleeping right now`
            }
        }
    }

    set owner(name) {
        this.name = name;
        console.log(`setter called ${name}`)
    }

    speak() {
        console.log(this.sound);
    }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip ');


console.log(ernie.activity());