$(document).ready(function() {
  $.ajax({
    url: '/asana/search',
    type: 'GET'
  })
    .done(function(results) {
      console.log('success!', results);
    })
    .fail(function(xhr) {
      console.log('Error, Will Robinson!', xhr);
    });
});
