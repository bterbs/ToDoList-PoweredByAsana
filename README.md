# ToDoList Powered By Asana

### Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

1. Clone or fork git repo `$ git clone https://github.com/bterbs/ToDoList-PoweredByAsana.git`
2. Install your dependencies: `$ npm install`
3. An Asana Personal Access Token is necessary for the application to function:

   1. Log onto: [https://asana.com/developers/documentation/getting-started/auth](https://asana.com/developers/documentation/getting-started/auth) for information on getting a personal access token.
   2. Create an empty file called 'config.js' in the root folder of your application.
   3. Paste this code in the file and save:
      `const keys = { API_KEY: "[paste your personal access token here]"}; module.exports = { keys };`

4. Run the server: `$ npm run start`

* This script uses `nodemon` It starts both the Node Express server in a way that will reload on changes to the code.

### Accessing the application

"Log on to [http://localhost:5000](http://localhost:5000) to access the client front end. The Express server will be running on port 5000."

### Using the application

1. Enter the Project ID number associated with your Asana project and click "Get Tasks"
2. It will then -

* List the project name (by {projectID})
* Display all tasks within the project
* Each individual task will link to the associated task in app.asana.com
* Include a button for each task that will hide the task from view.

3. Enter a different Project ID number and click "Get tasks" once more to view next task.

## Built With

* Back End

  * [Node.js](https://nodejs.org)
  * [Express](https://expressjs.com/)

* Front End
  * [Bootstrap](https://getbootstrap.com/)
  * [jQuery](https://jquery.com/)
