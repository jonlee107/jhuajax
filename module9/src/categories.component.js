(function () {
  'use strict';
  
// create component called categories
// shows all available categories in the menu to user

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'templates/categories.template.html', 
  bindings: {
  	categories: '<'
  }
});


})();