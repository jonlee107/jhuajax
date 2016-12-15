(function() {
        'use strict';

        angular.module('NarrowItDownApp', [])
            .controller('NarrowItDownController', NarrowItDownController)
            .service('MenuSearchService', MenuSearchService)
            .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

        NarrowItDownController.$inject = ['MenuSearchService'];
        function NarrowItDownController(MenuSearchService) {
            var found = this;
            found.searchTerm = "";
            //found.matchedItems = MenuSearchService.getMatchedMenuItems();

            var promise = MenuSearchService.getMatchedMenuItems();
			// use the then function	
            promise.then(function (response) {
            	var foundItems = [];

                // match all of the ones whose description matches search term
            	for (var i = 0; i < response.data.menu_items.length; i++) {
            		if (response.data.menu_items[i].description.search(found.searchTerm) != -1) {
            			foundItems.push(response.data.menu_items[i]);
            		}
            	}
            	found.foundItems = foundItems;
            	return foundItems;
            }

            function removeItem() {

            }
        }

        MenuSearchService.$inject = ['$http', 'ApiBasePath']
        function MenuSearchService($http, ApiBasePath) {
            var service = this;
				
            // reach out to server to retrieve the list of menu items
            service.getMatchedMenuItems = function() {
                var response = $http({
                    method = "GET",
                    url: (ApiBasePath + "/menu_items.json")
                    params: {
                    	//category
                    }
                });
				
				// return list (wrapped in a promise)
                return reponse;
            };
        })();
