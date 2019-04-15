var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt('Please enter the name of the item. To see all items type "list". To quit type "quit"');
  search = search.toLowerCase();
  if (search === 'quit'){
    break;
  } else if (search === 'list'){
    print(inStock.join(', '));
  } else {
    if (inStock.indexOf(search) > -1){
      print('Yes we have ' + search + ' in stock');
    } else {
      print('We do not have ' + search + ' in stock')
    }
  }
}