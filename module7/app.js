(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var listToBuy = this;
    	listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    	listToBuy.buyItem = function (itemIndex) {
      	try
      	{
        	ShoppingListCheckOffService.buyItem(itemIndex);
      	}
      	catch(error)
      	{
        	listToBuy.errorMessage = error.message;
	    }
    }
  }

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBoughtList = this;

		alreadyBoughtList.items = ShoppingListCheckOffService.getItemsBought();
	}

	function ShoppingListCheckOffService() {
		var service = this;

	// List of shopping items
	var itemsToBuy = [{name: "Cookies", quantity: "10"}, {name: "Candies", quantity: "11"}, {name: "Bagels", quantity: "13"}, {name: "Donuts", quantity: "14"}, {name: "Cheeses", quantity: "16"}];	
    var itemsBought = [];

	service.buyItem = function (itemIndex) {
		itemsBought.push(itemsToBuy[itemIndex]);
		service.removeItem(itemIndex);
		//items.hasStuff = true;
	};

	service.removeItem = function(itemIdex) {
		itemsToBuy.splice(itemIdex, 1);
		if (itemsToBuy.length == 0)
		{
        	throw new Error("itemsToBuy");
      	}
	};

	service.getItemsToBuy = function () {
		return itemsToBuy;
	}
	service.getItemsBought = function () {
		return itemsBought;
	};
}

})();
