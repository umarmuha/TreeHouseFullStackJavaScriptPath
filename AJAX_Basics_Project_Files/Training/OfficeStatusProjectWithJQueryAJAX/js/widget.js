$(document).ready(function () {
    $.getJSON("data/employees.json",
        function (response) {
            let HTML = `<ul class="bulleted">`;
            console.log(response);
            $.each(response, function () {
                //instead of using (index, value), lets use "this"
                //console.log(this.inoffice);
                if (this.inoffice === true) {
                    HTML += `<li class="in">`;
                } else {
                    HTML += `<li class="out">`;
                }
                HTML += this.name + `</li>`
            });
            HTML += `</ul>`;
            $('#employeeList').html(HTML);
        }
    );

    // For rooms I used the treehouse instructor approach where we
    // define the URL and callback function seprate and then feed those to the $.getJSON() function
    let urlRooms = "data/rooms.json";
    let callbackRooms = function (response) {
        console.log(response);
        let HTML = `<ul class="rooms">`;
        //console.log(response);
        $.each(response, function () {
            //instead of using (index, value), lets use "this"
            //console.log(this.inoffice);
            if (this.available === true) {
                HTML += `<li class="empty">`;
            } else {
                HTML += `<li class="full">`;
            } // end if else
            HTML += this.room + `</li>`
        }); // end each
        HTML += `</ul>`;
        $('#roomList').html(HTML);
    } // end callbackRooms
    $.getJSON(urlRooms, callbackRooms);

}); //end ready