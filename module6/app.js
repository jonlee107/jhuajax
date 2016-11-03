(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.lunchItems = "";
	
	$scope.displayCount = function () {
		var lunchString = $scope.lunchItems;
		if (lunchString == "") {
			$scope.message = "Please enter data first";
		}
		else {
			var arrayOfStrings = $scope.lunchItems.split(','); // get total value
			var count = arrayOfStrings.length;
		
		
			if (count <=3) {
				$scope.message = "Enjoy!";
			}
			else {
				$scope.message = "Too much!";
			}
		}
	};
};

})();
