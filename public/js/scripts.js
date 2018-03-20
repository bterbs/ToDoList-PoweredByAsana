$(document).ready(function() {
  const getTasks = input => {
    const projectID = input;
    console.log('Searching projectID::', projectID);

    $.ajax({
      url: `/asana/search`,
      contentType: 'application/json; charset=utf-8',
      type: 'GET',
      data: { id: projectID }
    })
      .done(function(results) {
        console.log('success!', results);
        const taskNodes = [];
        results.data.data.forEach(task => {
          taskNodes.push(
            $(`
              <div class="list-item">
              <button id=${task._id} class="complete-task-btn">&#x269E</button>
              <li class="task-item">${task.name}</li>
              </div>`)
          );
        });
        console.log(taskNodes);
        $('#list-output').empty();
        $('#list-output').append('<h4>Project</h4>');
        taskNodes.forEach(node => {
          $('#list-output').append(node);
        });
      })
      .fail(function(xhr) {
        console.log('Error, Will Robinson!', xhr);
      });
  };

  $('#get-btn').on('click', () => {
    let formData = $('#form').val();
    console.log('this is the form data', formData);
    getTasks(formData);
  });
});
