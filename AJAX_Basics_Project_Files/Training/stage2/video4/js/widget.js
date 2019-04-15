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
            HTML += `</li>`
        });
        HTML += `</ul>`;
        document.getElementById("employeeList").innerHTML = HTML;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();