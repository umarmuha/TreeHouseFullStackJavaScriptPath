// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i<employees.length; i += 1) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// xhr.open('GET', '../data/employees.json');
// xhr.send();

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let employeesList = JSON.parse(this.responseText);
    let HTML = `<ul class="bulleted">`;

    // forEach element generate HTML and display the status along with name
    employeesList.forEach(element => {
      if (element.inoffice === true) {
        HTML += `<li class="in">`;
      } else {
        HTML += `<li class="out">`;
      }
      HTML += `${element.name}`;
      HTML += `</li>`;
    });
    HTML += `</ul>`;
    document.getElementById("employeeList").innerHTML = HTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

let xhrRooms = new XMLHttpRequest();
xhrRooms.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let roomList = JSON.parse(this.responseText);
    let roomHTML = `<ul class="rooms">`;

    //the JSON parse will give a array of objects
    //iterating over each object using forEach
    roomList.forEach(element => {
      if (element.available === true) {
        roomHTML += `<li class="empty">`
      } else {
        roomHTML += `<li class="full">`
      }
      roomHTML += `${element.room}`;
      roomHTML += `</li>`;
    });
    //close the <ul> tag
    roomHTML += `</ul>`;
    document.getElementById("roomList").innerHTML = roomHTML;
    console.log(roomList);
  }
}
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();



// // Another approach from a studen on TreeHouse https://teamtreehouse.com/community/this-is-how-i-solved-it

// // Grab Divs and create <ul class="rooms"></ul>
// const roomListDiv = document.getElementById('roomList');
// const roomStatus = document.createElement('ul');
// roomStatus.className = 'rooms';
// let roomStatusItem;

// // Create XMLHttpRequest Object
// const roomsAv = new XMLHttpRequest();

// // A create element function, so I don't repeat myself
// let createElement = (el, cssClass) => {
//   roomStatusItem = document.createElement(el);
//   roomStatusItem.className = cssClass;
//   roomStatus.appendChild(roomStatusItem);
// };

// // And this is pretty much what Dave did:
// roomsAv.onreadystatechange = () => {
//   if (roomsAv.readyState === 4 && roomsAv.status === 200) {
//     let rooms = JSON.parse(roomsAv.responseText);
//     for (let i = 0; i < rooms.length; i += 1) {
//       // check if rooms are available
//       if (rooms[i].available === true) {
//         // if so create a li with the class of empty
//         createElement('li', 'empty');
//       } else {
//         // if not create a li with the class of full
//         createElement('li', 'full');
//       }
//       // append room numbers to tags
//       roomStatusItem.textContent = rooms[i].room;
//     }
//     /* now because I created the element using js instead of just putting the html tag, instead of adding innerHTML, I appended the room status */
//     roomListDiv.appendChild(roomStatus);
//     // check if there are no errors
//   } else if (roomsAv.status === 404) {
//     roomListDiv.textContent = 'Could not find rooms avaibility list. Check with your provider if the database is down';
//   } else if (roomsAv.status === 401) {
//     roomListDiv.textContent = 'Unothorized access. Contact if your provider to check your credentials';
//   }
// };

// // done :D
// roomsAv.open('GET', 'data/rooms.json');
// roomsAv.send();

