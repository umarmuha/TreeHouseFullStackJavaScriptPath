// Hide the spoiler text
$('.spoiler span').hide();

$('.spoiler').append(`<button>Reveal Spoiler</button>`);

// When the button is pressed
$('.spoiler').on('click', 'button', function (e) {
    // Show the spoiler text 
    console.log(e);
    //By inspecting the HTML element, now we know that we have to use the 
    //.prev() method to hide the spoliers for only the ones for which a button is clicked

    $(e.target).prev().show();
    //$('.spoiler span').show();
    // Hide the "Reveal Spoiler" button
    //$('.spoiler button').hide();
    $(e.target).hide();
});
    
    
// Next challange Progressive Enhancement
// Make your core conrent load even if JS is diabled

// The spoilers will load all the time. 
// Button is something we can add into JS. Even if JS is not avilable
// the user will still be able to see the Spoiler



