$(document).ready(function() {
  $.ajax({
    url: '/asana/search',
    type: 'GET'
  })
    .done(function(results) {
      console.log('success!', results);
      const taskNodes = [];
      results.data.data.forEach(task => {
        taskNodes.push(
          $(`
          <div class="list-item">
          <p>&#x2714</p>
          <li class="task-item">${task.name}</li>
          <button id=${task._id}>Details</button>
          </div>`)
        );
      });
      console.log(taskNodes);
      $('#list-output').empty();
      taskNodes.forEach(node => {
        $('#list-output').append(node);
      });
    })
    .fail(function(xhr) {
      console.log('Error, Will Robinson!', xhr);
    });
});
