$(document).ready(function () {
  $('button').on('click', function () {
    $("button").removeClass('selected');
    $(this).addClass('selected');
    let tag = $(this).text();
    let url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    $.getJSON(url, {
      tags: tag,
      format: "json"
    }).done(function (data) {
      console.log(data);
      let photoHTML = `<ul>`;
      $.each(data.items, function (i, item) {
        // This was example I followed from jQuery website and didnt pan out 
        // as I am not appending but replacing the HTML each time the button is pressed
        // https://api.jquery.com/jquery.getjson/ 
        //$("<img>").attr("src", item.media.m).appendTo("#photos");

        // Using template literals and string interpolation to create the HTML
        photoHTML += `
          <li class ="grid-25 tablet-grid-50">
            <a href="${item.link}" class="image">
              <img src="${item.media.m}">
            </a>
          </li>
          `
      });
      photoHTML += `</ul>`
      $('#photos').html(photoHTML);
    })
  });
});
