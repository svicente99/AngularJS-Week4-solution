(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  bindings: {
    items: '<',
	longName: '<'
  }
});

})();