var quizQuestions = [
  ['What is the color of the sky', 'blue'],
  ['What is the color of the tress','green'],
  ['What is the color of the sun', 'orange']
];
var correctAnswers = 0;
var html;
var question;
var answer;
var correctQuestions = [];
var wrongQuestion = [];

function printHTML(message){
  var outputDiv =  document.getElementById('output');
  outputDiv.innerHTML = message;
  //outputDiv.appendChild(printHtml(message));
}

function buildList(arr){  
  var list = document.createElement('ol');

  for (let i = 0; i < arr.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(arr[i]));
    list.appendChild(item);
  }
  return list;
}


for (let i = 0; i < quizQuestions.length; i++) {
  question = quizQuestions[i][0];
  answer = quizQuestions[i][1];
  response = prompt(question);
  if (response === answer) {
    correctAnswers += 1;
    correctQuestions.push(question);
  } else {
    wrongQuestion.push(question);
  }//if conditional statement
} //for loop

a = buildList(correctAnswers);
printHTML(a);
