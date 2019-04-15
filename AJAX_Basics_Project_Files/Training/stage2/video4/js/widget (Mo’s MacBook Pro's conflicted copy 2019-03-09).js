let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    console.log(xhr.status);
};
xhr.open('GET', 'data/employees.json');
xhr.send();

