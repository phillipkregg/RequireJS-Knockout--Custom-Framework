require(['task_manager'], function() {
  'use strict';

  var aTask = taskManager.createTask('My first task');
  console.log(aTask);
});
