// defining ready function to load all the HTML before JS
$(document).ready(function() {
    // Select all the buttons in the DOM and remove class for all of them
    // except the button that is clicked
    $("button").click( function() {
        $("button").removeClass("selected");
        $(this).addClass("selected");
        // Defining variables for all the parameters of getJSON function
        let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let animal = $(this).text(); // selecting the text for current button
        // data in object format which will be sent to the API server
        let flickrOptions = {
            tags: animal,
            format: "json"
        };
        function displayPhotos(data){
            let photoHTML = "<ul>";
            $.each(data.items, function(index, photo){
                photoHTML += '<li class="grid-25 tablet-grid-50">'
                photoHTML += `<a href="${photo.link}" class = "image">`;
                photoHTML += `<img src="${photo.media.m}"></a></li>` 
            });
            photoHTML += "</ul>";
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    });

}); //end ready