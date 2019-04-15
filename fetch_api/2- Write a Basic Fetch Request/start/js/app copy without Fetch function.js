// const select = document.getElementById('breeds');
const select = $("#breeds");
// const card = document.querySelector('.card'); 
// const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then (data => generateImage(data.message))

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => generateOption(data.message));


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateImage(data) {
    const html = `
        <img src="${data}">
        <p>Click to view images of ${select.val()}s</p>
    `;
    $(".card").html(html);
}

// USING JQUERY FOREACH FOR OBJECT ITERATION
// You can use each for objects too and not just for arrays:
// var obj = {
//     foo: "bar",
//     baz: "quux"
// };
// jQuery.each(obj, function(name, value) {
//     alert(name + ": " + value);
// });

function generateOption(data) {
    jQuery.each(data, function (breed) {
        console.log(breed);
        const html = `
            <option value = '${breed}'>${breed}</option>
            `;
        select.append(html); //using append method to append every iteration of dog type
    });
}
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

