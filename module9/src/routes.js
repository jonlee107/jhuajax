(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })


  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'MainController as main',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/:categoryShortName',
    templateUrl: 'src/templates/main-items.template.html',
    controller: 'ItemController as itemCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams',
        function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
    }
  });
}


})();