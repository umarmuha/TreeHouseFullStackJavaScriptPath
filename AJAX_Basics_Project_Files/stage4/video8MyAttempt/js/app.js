$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    let $search = $('#search');
    let $searchValue = $('#search').val();
    let $submitButton = $('#submit');
    // disabling search while searching and changing the search button to seaching..
    $search.prop('disabled', true);
    $submitButton.prop('disabled', true).val('Searching....');
    //console.log($search);
    $search.val('');
    $('#searchText').html(`Displaying photos of ${$searchValue}`);
  
    let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let flickrOptions = {
      tags: $searchValue,
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
      // enabling the disabled search field and button. Changing seaching... back to search
      $search.prop('disabled', false);
      $submitButton.prop('disabled', false).val('Search');
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });
}); // end ready