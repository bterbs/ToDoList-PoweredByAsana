let taskRemove;
$(document).ready(function() {
  // getTasks function takes projectID as argument, initiates ajax call and returns formatted task list on page.
  const getTasks = projID => {
    const projectID = projID;
    console.log('Searching projectID::', projectID);

    $.ajax({
      url: `/asana`,
      contentType: 'application/json; charset=utf-8',
      type: 'GET',
      data: { project: projectID }
    })
      .done(function(results) {
        console.log('success!', results);
        const taskNodes = [];
        results.data.forEach(task => {
          taskNodes.push(
            $(`
              <div class="list-item">
              <button id=${task.id} class="complete-task-btn">&#x269E</button>
              <a href="https://app.asana.com/0/${projectID}/${
              task.id
            }"><li class="task-item">${task.name}</li></a>
              </div>`)
          );
        });

        $('#list-output').empty();
        $('#list-output').append(`<h4>Project: ${projectID} </h4>`);
        taskNodes.forEach(node => {
          $('#list-output').append(node);
        });

        // Event listener for buttons that remove task from list
        $('.complete-task-btn').on('click', function() {
          $(this)
            .closest('div')
            .fadeOut();
        });
      })
      .fail(function(xhr) {
        console.log('Error, Will Robinson!', xhr);
      });
  };

  $('#get-btn').on('click', () => {
    let formData = $('#form').val();
    getTasks(formData);
  });

  // Event listener for buttons that remove task from list
  taskRemove = function() {
    $('.complete-task-btn').on('click', function() {
      $(this)
        .closest('div')
        .fadeOut();
    });
  };
});
