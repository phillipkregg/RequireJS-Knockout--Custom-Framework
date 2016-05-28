define(function() {
  'use strict';

  function save(list) {
    localStorage.setItem('listId', JSON.stringify(list.tasks));
  }

  function load(listId) {
    return JSON.parse(localStorage.getItem(listId));
  }

  function getLists() {
    var i,
        lists = [],
        length = localStorage.length;

    for (i=0; i<length; i++) {
      lists.push(localStorage.key(x));
    }
  }

  return {
    save: save,
    load: load,
    getLists: getLists
  }
});
