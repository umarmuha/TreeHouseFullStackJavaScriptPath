// Now we encapsulate the logic from the Object created earlier 
// inside of a function that we can invoke whenever we needed to create a new animal

function animal(name, energy) {
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
};

const neo = animal('Neo', 7);
const snoopy = Animal('Snoopy', 11);

``
` 
    This approach can be made better since everytime we create the animal 
    "instance" we are creating the eat sleep and play functions. 
    There’s no reason to re-create those methods as we’re currently doing whenever we create a new animal.
    Lets make it better in the Functional Instantiation with Shared Methods
    Reference the online article from Tyler. 
`
``


// ** Model **

// Simple object with properties 
let object1 = {};
object1.property1 = "test";
object1.property2 = "test2";

object1.doSomething1 = function name(params) {
    console.log("do something1");
};
object1.doSomething2 = function name(params) {
    console.log("do something2");
}

// Make a repeatable object we convert into function
// Functional Instantiation

function objectName(prperty1, property2) {
    let objectName = {};

    objectName.property1 = "test";
    objectName.property2 = "test2";

    objectName.doSomething1 = function name(params) {
        console.log("do something1");
    };
    objectName.doSomething2 = function name(params) {
        console.log("do something2");
    }
    return objectName;
};

const object1 = objectName("p1", "p2");
const object2 = objectName("p1", "p2");


// Make one reference to the object methods instead of creating methods with each object
// This makes the process by using less memory and making the object small size

let objectMethods = {
    doSomething1(params) {
        console.log("do something1");
    },
    doSomething2(params) {
        console.log("do something2");
    }
};

function objectName(prperty1, property2) {
    let objectName = {};

    objectName.property1 = "test";
    objectName.property2 = "test2";
    objectName.doSomething1 = objectMethods.doSomething1;
    objectName.doSomething2 = objectMethods.doSomething2;

    return objectName;
};

const object1 = objectName("p1", "p2");
const object2 = objectName("p1", "p2");

// Going step further using Object.create() function to delegate another object for 
// failed reference. This way we dont have to create reference for everything in the object.xyz

let objectMethods = {
    doSomething1(params) {
        console.log("do something1");
    },
    doSomething2(params) {
        console.log("do something2");
    }
};

function objectName(prperty1, property2) {
    let objectName = Object.create(objectMethods);  // Sending failed lookups to objectMethods

    objectName.property1 = "test";
    objectName.property2 = "test2";

    return objectName;
};

const object1 = objectName("p1", "p2");
const object2 = objectName("p1", "p2");


// Going step further instead of using built in Prototype (object) property for every function 
// Intead of using Object.create and managing different obejects

function objectName(prperty1, property2) {
    let objectName = Object.create(objectName.prototype);

    objectName.property1 = "test";
    objectName.property2 = "test2";

    objectName.prototype.doSomething1 = function name(params) {
        console.log("do something1");
    };
    objectName.prototype.doSomething2 = function name(params) {
        console.log("do something2");
    }
    return objectName;
};

const object1 = objectName("p1", "p2");
const object2 = objectName("p1", "p2");