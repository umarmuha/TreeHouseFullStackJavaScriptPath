// Hide the spoiler text
$('.spoiler span').hide();

// ****EVENT DELEGATION***
// When elements are being adding dynamically its best to add the 
// event listener to the parent element and have the child element delegate 
// the event to the parent 

// ** The evevent listener is created before the element that is suppose to send the
// the event is created i.e the button is being created after the listner on the button
// To make it work we will add the listner on the PARENT element "spoiler", instead
// of the <span> element

// When the button is pressed
// $('.spoiler button').on('click mouseleave', function () {
    $('.spoiler').on('click', 'button', function () {
    // Show the spoiler text 
    $('.spoiler span').show();
    // Hide the "Reveal Spoiler" button
    $('.spoiler button').hide();
});


// Using append to place the content after the selected element with class
// .spoiler once. Different than .before() which places element before every 
// matching element with .spoiler class
$('.spoiler').append(`<button>Reveal Spoiler</button>`);
$('.spoiler').append(`<button>Reveal Spoiler2</button>`);

// Before selector will not work as it is meant to add the content
// before every macthing element
// $('span').before(`<button>Reveal Spoiler</button>`);



    
    
// Next challange Progressive Enhancement
// Make your core conrent load even if JS is diabled

// The spoilers will load all the time. 
// Button is something we can add into JS. Even if JS is not avilable
// the user will still be able to see the Spoiler




