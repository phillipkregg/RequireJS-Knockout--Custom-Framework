define(['task', 'exports'], function(Task, exports) {
  'use strict';

  function createTask() {
    return new Task(name);
  }

  exports.createTask = createTask;

});
