// Object.create() example

const parent = {
    name: "Sam",
    age: 34,
    heritage: "Indonesian"
};

const child = Object.create(parent);
child.name = 'Pam';
child.age = 15;

console.log(child.age, child.name, child.heritage);