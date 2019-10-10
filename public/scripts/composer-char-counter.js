//Remember to add the reference to this file and test (using a console.log perhaps?) that it is being loaded into the index.html file correctly.

//Add a $(document).ready() function to your file to ensure the DOM has loaded.

$(document).ready(function() {
  // console.log("test!!");
  $("#textarea").on('keyup', function () {
    let current = $(this).val().length;
      if (current <= 140) {
        $('#counter').css('color', 'black');
      $('#counter').text(140 - current);
    } else if (current > 140) {
      $('#counter').text('-' + (current - 140));
      $('#counter').css('color', 'red');
    }
    //console.log(counter);
  })
});
