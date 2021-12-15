(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', '$stateParams'];
function ItemsListController(MenuDataService, $stateParams) {
  var shortName = $stateParams.shortName;
  var list    = this;
  var promise = MenuDataService.getItemsForCategory(shortName);
  list.longName = $stateParams.longName;
  
  promise
	.then( function (response) {
		list.items = response.data.menu_items;
		list.items = list.retrieveItemsByCategory(shortName);
		// console.log(list.items);
    })
	.catch(function (error) {
		console.log("Something went terribly wrong...");
	});
	
  // filter only the items according to leters of category short name
  list.retrieveItemsByCategory = function (nmShortLink) {
	var categItems = [];
	var arrItems = list.items;
	
	for(var item in arrItems) {
		let shortName = arrItems[item].short_name.toUpperCase();
		// https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
		let category  = shortName.replace(/[0-9]/g,'');
		if (category === nmShortLink) {
			categItems.push(arrItems[item]);
		}
	}
	return categItems;
  }	  

}

})();