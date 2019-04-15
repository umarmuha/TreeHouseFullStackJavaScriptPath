var quizQuestions = [
  ['What is the color of the sky', 'blue'],
  ['What is the color of the tress','green'],
  ['What is the color of the sun', 'orange']
];
var responses = 0;

function print(message){
  document.write( '<p>' + message + '</p>');
}

for (let i = 0; i < quizQuestions.length; i++) {
  answer = prompt(quizQuestions[i][0]);
  print('Question: ' + quizQuestions[i][0]);
  if (answer === quizQuestions[i][1]) {
    print (answer + ' is the correct Answer');
    responses += 1;
  } else {
    print (answer + ' is not the correct Answer');
  } //if conditional statement
} //for loop
print('You answered ' + responses + ' correct questions');