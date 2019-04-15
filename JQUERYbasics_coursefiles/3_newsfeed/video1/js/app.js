const $odd = $('a:odd');
//$odd.hide();
$('a').attr("target", "_blank");
//$odd.css('backgroundColor', "lightgrey");

const $secureLinks = $('a[href^="https"]');
// secureLinks.hide();
const $pdfLinks = $('a[href$=".pdf"]');
// pdfLinks.hide();
$pdfLinks.attr("download", true);

// Adding CSS classes to elements
$secureLinks.addClass("secure");
$pdfLinks.addClass("pdf");

