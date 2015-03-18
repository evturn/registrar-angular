angular.module('userService'), [])

.factory('User', function($http) {

	var userFactory = {};

	userFactory.get = function(id) {
		return $http.get('/api/users/' + id);
	};

	userFactory.all = function() {
		return $http.get('/api/users/');
	};

});