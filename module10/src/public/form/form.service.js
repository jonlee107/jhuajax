(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  service.firstname = "";
  service.lastname = "";
  service.email = "";
  service.phone = "";
  service.favdish = "";
  service.completed = false;
  
  service.submit = function (firstname, lastname, email, phone, favdish) {
    service.completed = true;
    service.firstname = firstname;
    service.lastname = lastname;
    service.email = email;
    service.phone = phone;
    service.favdish = favdish;
  };

  service.getInfo = function() {
    return [service.firstname,
    service.lastname,
    service.email,
    service.phone,
    service.favdish,
    service.completed];
  };
}
})();
