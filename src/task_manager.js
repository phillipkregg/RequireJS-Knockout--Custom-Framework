define(['task', 'exports'], function(task, exports) {
  'use strict';

  function createTask() {
    return new Task(name);
  }

  exports.createTask = createTask; 

});
