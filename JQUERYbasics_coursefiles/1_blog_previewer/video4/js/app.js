// Not using .hide() as in the videos since read the question post
// where the helper mentioned to just change the display property of the 
// flashMessage to none in the CS file. 
// $('#flashMessage')
//     .slideDown(1000)
//     .delay(2000)
//     .slideUp(1000);

// // create constants for Title and Content of the blog
// const title = "My First Blog Post";
// const content = "This is my first post!"

// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').text(content);

// Get the  title and content input values and set them into the  blog Title and Preview

// selecting the Preview button by "id" and adding click function
$('#previewButton').click(function () {
    // first grab the title input
    const title = $('#blogTitleInput').val();
    // console.log(title);
    
    // Now grabbing the context field input
    const content = $('#blogContentInput').val();
    //console.log(content);

    // Next step to take these values and insert them into the Blog Title/Content properties
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').text(content);

    // Clearing out the value of fields after submission
    $('#blogTitleInput').val('');
    $('#blogContentInput').val('');

    // Now add the flash message animation after the button has been clicked
    $('#flashMessage')
    .slideDown(1000)
    .delay(2000)
    .slideUp(1000);

});