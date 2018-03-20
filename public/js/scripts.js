$(document).ready(function() {
  // getTasks function takes projectID as argument, initiates ajax call and returns formatted task list on page.
  const getTasks = projID => {
    const projectID = projID;
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

        // add event listener to task-complete buttons that remove task on click
        $('.complete-task-btn').on('click', function() {
          console.log('clicked the complete button!');
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
    console.log('this is the form data', formData);
    getTasks(formData);
  });
});
