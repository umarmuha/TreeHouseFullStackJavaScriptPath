$(document).ready(function(){
    //console.log("ready!!!");
    let url = "../video3/data/employees.json";
    //console.log(url);
    let callback = function (response) {
        //console.log(response);
        let statusHTML = "<ul class='bulleted'>";
        $.each(response, function (index, employee) {
            if (employee.inoffice === true) {
                statusHTML += '<li class="in">';
            } else{
                statusHTML += '<li class="out">'
            }
            statusHTML += employee.name + '</li>';
        });
        statusHTML += "</ul>"
        $('#employeeList').html(statusHTML);
    };
    $.getJSON(url,callback);
}); // end ready