const select = document.getElementById('breeds');
// const select = $("#breeds");
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
    return fetch(url)
           .then(checkStatus)
           .then(response => response.json())
           .catch(error => console.log('looks like there was a problem', error)) 
}

//  Using Promise.all() method instead of writing indivudual Fetch Methods

Promise.all([
    fetchData('https://dog.ceo/api/breeds/list/all'), 
    fetchData('https://dog.ceo/api/breeds/image/random')
])
.then(data => {
    const breedList = data[0].message;
    const randomImage = data[1].message;

    generateOption(breedList);
    generateImage(randomImage);
})

//  Using individual Fetch Methods. 
// fetchData('https://dog.ceo/api/breeds/list/all')
//     //.then(response => response.json())
//     .then(data => generateOption(data.message))

// fetchData('https://dog.ceo/api/breeds/image/random')
//     //.then(response => response.json())
//     .then (data => generateImage(data.message))
    

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function generateImage(data) {
    const html = `
        <img src="${data}">
        <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
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
        //console.log(breed);
        const html = `
            <option value = '${breed}'>${breed}</option>
            `;
        select.innerHTML += html; //using append method to append every iteration of dog type
    });
}


function fetchBreedImage() {
    //console.log(data);
    breed = select.value;
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            //$('.card').children('img').attr('src', `${data}`);
            //console.log(data);
            const html = `
                    <img src="${data.message}">
                    <p>Click to view more images of ${breed}s</p>
                    `;
            card.innerHTML = html;
            //console.log(card.innerHTML);
    })
    //$('.card').children('p').text(`Click to view more ${data}s`)
    //$(".card").html(html);
}
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
form.addEventListener('submit', postData)

// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
    e.preventDefault();
    const name = $('#name').val();
    const comment = $('#comment').val();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name, comment})
    }

    fetch('https://jsonplaceholder.typicode.com/comments', config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
    
}








// Example from the teacher Notes to use promise.all in a 
//  different way

// // store urls to fetch in an array
// const urls = [
//     'https://dog.ceo/api/breeds/list',
//     'https://dog.ceo/api/breeds/image/random'
//   ];
  
//   // use map() to perform a fetch and handle the response for each url
//   Promise.all(urls.map(url =>
//     fetch(url)
//       .then(checkStatus)                 
//       .then(parseJSON)
//       .catch(logError)
//   ))
//   .then(data => {
//     // do something with the data
//   })
  