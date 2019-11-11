// Make a dropbox file. One important thing I learned is that you can set
// setters and getters on a class as well as an object literal

// let thing = {
//     a : 7,

//     get b(){
//         return (this.a + 1);
//     },

//     get c(){
//         return this.a = (this._c / 2);
//     },

//     set c(c){
//         this._c = c;
//     }

// };

// console.log(thing.a);
// console.log(thing.b);

// thing.c = 50;
// console.log(thing.c);


// The example above I used the backing property. 
// I want to test if I dont set the name of the property and the passed in Parameter the same and then I DONT have to use a backing property 



let thing = {
    a: 7,

    get b() {
        return (this.a + 1);
    },

    get c() {
        return this.a = (this._c / 2);
    },

    set c(x) {
        this._c = x; // The key is that the name of the property this._c can never be the same as the name of the setter "c" in this case
    }

};

console.log(thing.a);
console.log(thing.b);

thing.c = 50;
console.log(thing.c);

``
` 
    Conclusion: is that the name of the property example this._c can not be the same as the setter method "c" in our example
    It cannot be this.c for setter function c. Even if the value being passed to the setter function has the same name or 
    not, it does not matter so setc(c){this._c = c}; and setc(x){this._c = x}; are the same. The only thing matters is the 
    name of the backing property and the name of the setter function. 
`
``