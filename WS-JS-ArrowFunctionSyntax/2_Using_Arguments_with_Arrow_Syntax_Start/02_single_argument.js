/*
Convert these into Arrow Functions
function square(x) {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}
*/

//Arrow function conversion

const square = (x) => {
    return x * x;
}

const cube = (x) => {
    return square(x) * x;
}

console.log(cube(2));