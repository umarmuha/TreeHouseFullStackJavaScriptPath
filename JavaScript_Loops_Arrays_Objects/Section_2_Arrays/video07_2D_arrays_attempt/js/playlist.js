var playList = [
  ['I Did It My Way', 'Tukh Malanga'],
  ['Respect', 'RanoPano'],
  ['Imagine', 'Elmo'],
  ['Born to Run', 'Pepppedi'],
  ['Louie Louie', 'Lololala'],
  ['Maybellene', 'PiloPala']
];

function print(message) {
  document.write(message);
}

function printSong( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i][0] + ' by ' + list[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSong(playList);





















