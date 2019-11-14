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

    speak() {
        console.log(this.sound);
    }
}

class Owner {
    constructor(name, address){
        this.name = name,
        this.address = address
    }

    get phone(){
        return this._phone;
    }

    set phone(phone){
        let phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized
    }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip ');

ernie.owner = new Owner('Jugga', 'Puppo Street')

console.log(ernie.owner.address);