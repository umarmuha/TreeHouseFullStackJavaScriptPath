// Hide the spoiler text
$('.spoiler span').hide();

// Using append to place the content after the selected element with class
// .spoiler once. Different than .before() which places element before every 
// matching element with .spoiler class
$('.spoiler').append(`<button>Reveal Spoiler</button>`);

// Before selector will not work as it is meant to add the content
// before every macthing element
// $('span').before(`<button>Reveal Spoiler</button>`);


// When the button is pressed
$('.spoiler button').click( function () {
    // Show the spoiler text 
    $('.spoiler span').show();
    // Hide the "Reveal Spoiler" button
    $('.spoiler button').hide();
});
    
    
// Next challange Progressive Enhancement
// Make your core conrent load even if JS is diabled

// The spoilers will load all the time. 
// Button is something we can add into JS. Even if JS is not avilable
// the user will still be able to see the Spoiler

