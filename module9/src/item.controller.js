(function () {
'use strict';
  
angular.module('data')
.controller('ItemController', ItemController);

ItemController.$inject = ['items'];
function ItemController(items) {
	var itemCtrl = this;
	itemCtrl.category = items.category;
	itemCtrl.items = items.menu_items;
	console.log("Controller itemctrl.items", itemCtrl.items);
}


})();