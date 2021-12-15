(function () {
'use strict';

angular.module('MenuApp')
 .constant('ApiBasePath', "http://127.0.0.1/davids-restaurant")
 .service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
	var service = this;
	
	service.getAllCategories = function () {
		var response = $http({
			method: "GET",
			url: (ApiBasePath+'/categories.json')
		});
	return response;
	};

	service.getItemsForCategory = function () {
		var response = $http({
			method: "GET",
			url: (ApiBasePath+'/menu_items.json')
		});
	return response;
	};
}

})();