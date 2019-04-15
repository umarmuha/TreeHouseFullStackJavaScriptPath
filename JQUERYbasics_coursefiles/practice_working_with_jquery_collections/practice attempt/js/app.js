//1. Add a "featured" tag to the second item in the list: 
  //  Append a new span element containing the word "Featured" to the list item
  //  Add a class of "featured" to the new span element. 
$('li:eq(1)').append("<span>Featured</span>");
$('li span').addClass('featured');


//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 
$('li').last().addClass('new');
//3. Add an attribute to each link so that all anchor tags open in a new tab. 

// No need to do a loop since Jquery already goes over elements one by one
// $('a').each(function () {
//   $(this).attr('target', '_blank');
// });

// Just select all 'a' links using Jquery and it will iterate over all of 
// by default
$('a').attr('target', '_blank');


//4. Select and print the index and text of each anchor tag to the console
$('a').each(function(index, item){
  console.log(index, $(item).text())
});
//5. Refactor question #4 using the 'this' keyword. 
$('a').each(function(index){
  console.log(index, $(this).text())
});