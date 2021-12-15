(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService'];
function CategoriesListController(MenuDataService) {
  var list    = this;
  var promise = MenuDataService.getAllCategories();

  promise
	.then( function (response) {
		list.categories = response.data;
    })
	.catch(function (error) {
		console.log("Something went terribly wrong...");
	});
}

})();