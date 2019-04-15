// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append it in the DOM
$('.spoiler').append($button);

$('.spoiler span').hide();
// When the button is pressed
$('.spoiler button').click(function() {
    $('.spoiler span').show();
    $('.spoiler button').hide();
});
    // Show the spolier
    // Hide the "Show Spolier" button





