const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];




const users = [{
        name: 'Samir',
        age: 27
    },
    {
        name: 'Angela',
        age: 33
    },
    {
        name: 'Beatrice',
        age: 42
    },
    {
        name: 'Shaniqua',
        age: 30
    },
    {
        name: 'Marvin',
        age: 23
    },
    {
        name: 'Sean',
        age: 47
    }
];

// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

console.log(users.filter(user => user.age >= 30).map(user => user.name));


/**
 * Using the filter and map methods on the todos array, create an array of unfinished task strings. 
 * See the comments below to see the correct result. Store the new array in the variable unfinishedTasks.
 */
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below
console.log(todos.filter(task => task.done === false).map(task => task.todo));