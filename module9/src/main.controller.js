(function () {
'use strict';
  
angular.module('data')
.controller('MainController', MainController);

MainController.$inject = ['categories'];
function MainController(categories) {
	var main = this;
	main.categories = categories;
}


})();