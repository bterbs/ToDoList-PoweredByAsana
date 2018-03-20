$(document).ready(function() {
  let url = 'https://app.asana.com/api/1.0/projects/600042698902717/tasks';

  $.ajax({
    url: url,
    type: 'GET',
    headers: { Authorization: 'Bearer asanaPersonalAccesToken' }
  })
    .done(function(data) {
      console.log('success', data);
    })
    .fail(function(xhr) {
      console.log('Error, Will Robinson!', xhr);
    });
});
