var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene',
  'This is my Jam'
];

function print(message) {
  document.write(message);
}

function printList(playList) {
  var listHTML = '<ol>';
  for (let i = 0; i < playList.length; i++) {
    listHTML += '<li>' + playList[i] + '</li>';
  } 
  listHTML += '</ol>';
  print(listHTML)
}
printList(playList)