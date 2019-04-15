// We use $ to identify variables that contain JQuery selected elements

const $odd = $("a:odd");
const $secureLinks = $("a[href^='https://']");
const $pdfs = $("a[href$='.pdf']");
const $pdfCheckbox = $('<label><input type="checkbox" /> Allow PDF downloads</label>');

$secureLinks.attr("target", "_blank");
$pdfs.attr("download", true);


$secureLinks.addClass("secure");
$pdfs.addClass("pdf");

$pdfs.on('click', function (e) {
    if ($(':checked').length === 0) {
        e.preventDefault();
        alert("Please check the allow PDF checkbox");
    }
});

$('#links').append($pdfCheckbox);

// // Showing how each() method can be used to look through jquery elements
// $('a').each(function (indexInArray, valueOfElement) { 
//     console.log(indexInArray, valueOfElement);
//     //  Using selection to show only the href property of currently indexed item
//     //console.log(indexInArray, $(valueOfElement).attr("href"));
// });

// Easier way to look through JQuery elements
$('a').each(function () { 
     const url = $(this).attr("href");
     console.log (url);
     $(this).parent().append(`(${url})`);
});
