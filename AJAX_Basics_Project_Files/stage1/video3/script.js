var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    $('#ajax').html(xhr.responseText);
  }
};
xhr.open('GET', 'sidebar.html');
$("#load").on('click', function sendAJAX() {
    xhr.send();
    $(this).hide();    
});
