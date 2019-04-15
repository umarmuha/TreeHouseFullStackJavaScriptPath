var message = '';
function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

for (let i = 0; i < students.length; i++) {
   message += '<h2>Student: ' + students[i].Name + '</h2>';
   message += '<p>Track: ' + students[i].Track + '</p>'
   message += '<p>Points: ' + students[i].Points + '</p>'
   message += '<p>Achievements: ' + students[i].Achievements + '</p>'
}
print(message);