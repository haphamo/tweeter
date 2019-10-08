//Remember to add the reference to this file and test (using a console.log perhaps?) that it is being loaded into the index.html file correctly.

//Add a $(document).ready() function to your file to ensure the DOM has loaded.

$(document).ready(function() {
  // console.log("test!!");
  $("#text-area").keyup(function () {
    let current = $(this).val().length;
    let counter = 140 - current;
    $('#counter').text(counter);
    
    console.log(counter);
  })
});
