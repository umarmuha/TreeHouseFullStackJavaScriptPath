wvar message = '';
var student;
var search;
var fullReport='';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//Function to print all the student names in the student array. 
function fullStudentReport(arr) {
  for (var i = 0; i < arr.length; i += 1) {
    student = arr[i];
    fullReport += '<h2>Student: ' + student.name + '</h2>';
    fullReport += '<p>Track: ' + student.track + '</p>';
    fullReport += '<p>Points: ' + student.points + '</p>';
    fullReport += '<p>Achievements: ' + student.achievements + '</p>';
  }
  return fullReport;
}

//Function to print info for one student that is passed to the function. 
function getStudentReport(message) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;  
}

while (true) {
  search = prompt("Please enter the name of the student e.g Elmo, John, Kelly, Joe")
  if (search === null || search === 'quit') {
    break;
} else if (search === 'list') {
    message = fullStudentReport(students);
    print(message);
    break;
}
  for (let i = 0; i < students.length; i++) {
    student = students[i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
    } 
//Add a logic if the user inputs a student not in list, print a message and break
    if (! student.name) {
      message = "The student: " + search + ' is not present in the student directory';
      print(message);
    }
  }
}