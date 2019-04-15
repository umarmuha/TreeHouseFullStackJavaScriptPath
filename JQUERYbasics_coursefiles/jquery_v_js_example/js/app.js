// Using javaScript menthods
// let box = document.querySelector('.box');
// box.style.display = 'none';
// box.addEventListener('click', function () {
//     alert('You clicked me!');
// })

// Using JQuery methods
$('.box').hide();
$('.box').show();

$('.box').click(function () {
    alert('You clicked me with JQuery');
})