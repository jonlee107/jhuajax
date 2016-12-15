(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var found = this;
    	
    	MenuSearchService.getMatchedMenuItems();
  	}


	function MenuSearchService() {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			// reach out to server to retrieve the list of menu items

			// match all of the ones whose description matches search term

			// return list (wrapped in a promise)
			// use the then function

			return $http(...).then(function (result) {
				//process result and only keep items that match


				var foundItems...

				// return processed items
				return foundItems;

				//
			}
		};
	}

})();
