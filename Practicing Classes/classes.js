/**
 * Create a new class called User. Do not add a constructor method yet.
 * 
 * Add a constructor method to the User class. It should have the following properties.
 * email, set to the value of the email parameter.
 * username, set to the value of the username parameter.
 * birthday, set to the value of the birthday parameter 
 * The values for email, username, and birthday will be passed in when the object is created 
 * so don't forget to add these three parameters in the constructor method.
 * 
 * Create a variable called user1. Set this variable to a instance of the User class. 
 * Pass in the following arguments for email, username, and birthday respectively. 
 * Suggestion: Try copying and pasting the values instead of retyping them.
 * "JavaScriptStudent@teamtreehouse.com"
 * "JSUser1"
 * "1/08/1991"
 * 
 * Add a method to the User class called changeUsername()
 * This method should receive one parameter username, a string representing a new username for the user1 object.
 * This method should not return anything
 * Inside the method, update the value of the username property to the value of the username parameter
 */


class User{
    constructor(email, username, birthday){
        this.email = email,
        this.username = username,
        this.birthday = birthday
    }

    changeUsername(username){
        this.username = username;
    }
}

const user1 = new User("JavaScriptStudent@teamtreehouse.com", "JSUser1", "1/08/1991")

console.log(user1);
user1.changeUsername("TreehouseStudent2");
console.log(user1);