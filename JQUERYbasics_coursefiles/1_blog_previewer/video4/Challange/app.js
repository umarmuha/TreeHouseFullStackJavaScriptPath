// On button click, set the Name to the value recieved from the ChnageName input
$('button').click(function () {

    // First get the value of from the changeName field
    const newName = $('#name-input').val();

    // Then change the name to the changeName const
    $('.profile-name').text(newName);

    // Reset the Chnage Name input field
    $('#name-input').val('');

});

// ******* 
// Quiz question regarding JQuery Selectors

$('#price-list li').html('<strong>$4.99</strong>');
// Selects the list item Nested within #price-list and set its 
// HTML content to $4.99