$(document).ready(function(){
  let url = "../video8myAttempt/data/employees.json";
  $.getJSON(url, function (response) {
      let statusHTML = "<ul class='bulleted'>";
      $.each(response, function (index, employee) {
          if (employee.inoffice === true) {
              statusHTML += '<li class="in">';
          } else{
              statusHTML += '<li class="out">'
          }
          statusHTML += employee.name + '</li>';
      }); //end each
      statusHTML += "</ul>"
      $('#employeeList').html(statusHTML);
  }); // end getJSON


  let roomsURL = "../video8myAttempt/data/rooms.json";
  $.getJSON(roomsURL, function (response) {
      let statusHTML = "<ul class='rooms'>";
      $.each(response, function (index, rooms) {
          if (rooms.available === true) {
              statusHTML += '<li class="empty">';
          } else{
              statusHTML += '<li class="full">'
          }
          statusHTML += rooms.room + '</li>';
      }); //end each
      statusHTML += "</ul>"
      console.log(statusHTML);
      $('#roomList').html(statusHTML);
  }); // end getJSON  
}); // end ready


