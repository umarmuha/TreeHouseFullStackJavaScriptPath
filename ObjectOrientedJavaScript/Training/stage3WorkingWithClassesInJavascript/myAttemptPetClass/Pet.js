class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    get activity(){
        const today = new Date();
        const hour = today.getHours;
        if (hour >8 && hour <=20 ) {
            return 'playing';
        } else {
            return 'sleeping';
        }
    } 

    speak(){
        console.log(this.sound);
    }

    get owner() {
        return this._owner;
    }

    set owner(owner){
        // we cannot have the property name as same as the 
        // name of the getter and setter name. That is why we use a backing property
        // which is donated by "._"
        this._owner = owner;
    }
}

class Owner {

    constructor (name, address) {
        this.name = name;
        this.address = address;
    }

    // Setter is used when you want to attach a logic to a property value 
    // or simplify your coding process
    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g, ""); 
        this._phone = phoneNormalized;
    }

    get phone() {
        return this._phone;
    }
}


const ernie = new Pet('dog', 1, 'pug', 'woof woof');
const vera = new Pet('dog', 8, 'Border Collie', 'heef heef');
const scofield = new Pet('dog', 6,'Doberman', 'argh argh');

ernie.speak();
vera.speak();
scofield.speak();  

// made a mistake and used ernice.activity() first. Remember that with getters
// we can access the getter method as a property so no need to use () and user the 
// normal dot notation, like we do to access any property
console.log(ernie.sound);

// ernie.owner = "John Doe";
// console.log(ernie.owner);
// console.log(ernie.activity);

// Now lets use the new Owner class as the owner of the pet

ernie.owner = new Owner('Bill', 'London, Kite Street 766554');
console.log(ernie.owner);
// since the phone number is not of the paramters being passed in 
// and setters and getters only set/get properties. In order to pass value 
// for those properties, you define them later, like the one below. 
ernie.owner.phone = '(567) 987-0987';
console.log(ernie.owner.phone);
console.log(ernie.owner);
