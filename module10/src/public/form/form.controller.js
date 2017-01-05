(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  	var $ctrl = this;
  	$ctrl.menuItems = menuItems;

  	var signup = this;
	signup.firstname =  SignupService.firstName;
	signup.lastname = SignnupService.lastName;
	signup.email = SignupService.email;
	signup.phone = SignupService.phone;
	signup.favdish = SignupService.favShortName;
	signup.completed = SignupService.regCompleted;
	signup.submit = function () {
	    signup.completed = true;
	    SignupService.submit(signup.firstName, signup.lastName, signup.email, signup.phone, signup.favdish);

	};
}
})();