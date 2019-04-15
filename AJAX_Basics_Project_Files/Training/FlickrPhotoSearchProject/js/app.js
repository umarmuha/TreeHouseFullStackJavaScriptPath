$(document).ready(function () {
    $("#search").val('');
    $("form").submit(function (e) {
        e.preventDefault();

        // If we followed the treehouse tutorial and select a DOM element using jQury like below
        // Then for jQuery selection use a $ at the beginning of a variable
        // let $searchField = $('search);
        // let animal = $searchField.val();
        // instead of what I did, giving the val directly to a var. No need to use $ then for var
        let tag = $("#search").val();
        let url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let data = {
            tags: tag,
            format: "json"
        };
        let callback = function (data) {
            photoHTML = '<ul>';
            $.each(data.items, function (i, item) {

                // Anchor tag <a> acts as container. Adding <img> then the href link to the
                // image insice that "container".
                photoHTML += `
                <li class ="grid-25 tablet-grid-50">
                  <a href= "${this.link}" class="image" target="_blank">
                    <img src= "${this.media.m}">
                  </a>
                </li> 
               `
            });
            photoHTML += "</ul>"
            $("#photos").html(photoHTML);
        };
        $("#search").val('');
        $.getJSON(url, data, callback);
    });
    

});