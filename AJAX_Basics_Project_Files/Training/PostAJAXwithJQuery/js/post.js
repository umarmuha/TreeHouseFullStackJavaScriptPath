$(document).ready(function () {
    //select form and add the submit method
    $('form').submit(function (e) { 
        e.preventDefault();
        let url = $(this).attr("action");
        console.log(url);
        let data = $(this).serialize();
        $.post(url, data,
            function (response) {
                $('#signup').html("<p>Thanks for signing up!</p>");
            }
        );
    });
});

// Instead of using POST method we can also use the .ajax method which 
// gives us more flexibility and options

$(document).ready(function () {
    //select form and add the submit method
    $('form').submit(function (e) { 
        e.preventDefault();
        let url = $(this).attr("action");
        console.log(url);
        let data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (response) {
            $('#signup').html("<p>Thanks for signing up!</p>");
            }
        });
    });
});