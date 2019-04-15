var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let employees = JSON.parse(this.responseText);
    let statusHTML = "<ul class='bulleted'>";
    employees.forEach(element => {
      if (element.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += element.name;
      statusHTML += "</li>";
    });
    statusHTML += "</ul>";
    console.log(statusHTML);
    //document.getElementById('employeeList').innerHTML = statusHTML;
    $('#employeeList').html(statusHTML);
  };
};
xhr.open("GET", "data/employees.json");
xhr.send();

var xhrRoom = new XMLHttpRequest();
xhrRoom.onreadystatechange = function () {
  if (xhrRoom.readyState === 4) {
    let rooms = JSON.parse(this.responseText);
    let statusHTML = "<ul class='rooms'>";
    rooms.forEach(element => {
      if (element.available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += element.room;
      statusHTML += "</li>";
    });
    statusHTML += "</ul>";
    console.log(statusHTML);
    //document.getElementById('roomlist').innerHTML = statusHTML;
    $('#roomList').html(statusHTML);
  };
};
xhrRoom.open("GET", "data/rooms.json");
xhrRoom.send();