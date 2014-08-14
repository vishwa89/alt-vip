var alt = angular.module('alt', ['ngResource', 'ngRoute', 'wu.masonry']);

alt
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/pages/index' })
	.when('/brand/products', { templateUrl: '/pages/brand-products' })
	.when('/brand/:chapter', { templateUrl: '/pages/brand-chapter' })
	.when('/search', { templateUrl: '/pages/search' })
	.when('/search/:section', { templateUrl: '/pages/search-section' });
});