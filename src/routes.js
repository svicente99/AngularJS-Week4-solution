(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesListController as list1',
	resolve: {
	  categoriesList: ['MenuDataService', function (MenuDataService) {
		return MenuDataService.getAllCategories();
	  }]
	}
  })
  
  // Items for one category segment
  .state('categories/items', {
	// url: '/items/{category_id}',
	templateUrl: 'src/templates/items.template.html',
	controller: 'ItemsListController as list2',
	params: { shortName: null, longName: null }
  })
}

})();