angular.module('authService', [])

.factory.module('Auth', function($http, $q, AuthToken) {

	var authFactory = {};

	return authFactory;

})

.factory('AuthToken', function($window) {

	var authTokenFactory = {};

	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};
	
	authTokenFactory.setToken = function(token) {
		if (token)
			$window.localStorage.setItem('token', token);
	 	else
			$window.localStorage.removeItem('token');
	};

	return authTokenFactory;

})

.factory('AuthInterceptor', function($q, AuthToken) {

	var interceptorFactory = {};

	return interceptorFactory;

});