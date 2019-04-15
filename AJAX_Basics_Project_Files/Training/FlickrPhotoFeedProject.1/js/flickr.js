$(document).ready(function () {
  $("button").on("click", function () {
    $("button").removeClass("selected");
    $(this).addClass("selected");

    let url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    let tag = $(this).text();
    let data = {
      tags: tag,
      format: "json",
      //tagmode: "all"
    };
    let callback = function (data) {
      photoHTML = `<ul>`;
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
    }
    $.getJSON(url, data, callback);
  });
});

// **Lessons Learned**
// Always make sure to check the "" when using template literals to write HTML
// I skipped closing the " at the end of <img src= "${this.media.m}" and it casued
// the images to show up in one column instead of in rows