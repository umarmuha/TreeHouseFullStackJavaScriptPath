class User {
    constructor(email, username, birthday) {
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
    // By doing this example I found out that you can give 
    // paramters to methods as well
    changeUsername(username) {
        this.username = username;
    }
}

var user1 = new User('JavaScriptStudent@teamtreehouse.com', 'JSUser1', '1/08/1991');
user1.changeUsername("TreehouseStudent2");


