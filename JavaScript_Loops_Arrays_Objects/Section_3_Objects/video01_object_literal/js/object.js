let person = {
    name: 'Sarah',
    country: 'US',
    age: 35,
    treeHouseStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
    let div = document.getElementById('listDiv');
    div.innerHTML = message;
}

message = 'My name was ' + person.name;
person.name = 'Johnny Bravo';
message += '<p>Now my name is ' + person.name + '</p>';
print(message);