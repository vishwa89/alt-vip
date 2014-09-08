var alt = angular.module('alt', ['ngResource', 'ngRoute', 'wu.masonry']);

alt
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', { templateUrl: '/pages/index' })
	.when('/brand/products', { templateUrl: '/pages/brand-products' })
	.when('/vip-recentNews', { templateUrl: '/pages/vip-recentNews' })
	.when('/vip-myConnections', { templateUrl: '/pages/vip-myConnections' })
	.when('/vip-profileDetail', { templateUrl: '/pages/vip-profileDetail' })
	.when('/vip-otherMemberProfile', { templateUrl: '/pages/vip-otherMemberProfile' })
	.when('/vip-accountInbox', { templateUrl: '/pages/vip-accountInbox' })
	.when('/vip-accountInvitation', { templateUrl: '/pages/vip-accountInvitation' })
	.when('/vip-accountTrash', { templateUrl: '/pages/vip-accountTrash' })
	.when('/vip-accountMailDetails', { templateUrl: '/pages/vip-accountMailDetails' })
	.when('/vip-accountCompose', { templateUrl: '/pages/vip-accountCompose' })
	.when('/vip-accountProfileDetail', { templateUrl: '/pages/vip-accountProfileDetail' })
	.when('/vip-profileNotConnected', { templateUrl: '/pages/vip-profileNotConnected' })
	.when('/brand/:chapter', { templateUrl: '/pages/brand-chapter' })
	.when('/vip-otherMemberConnections', { templateUrl: '/pages/vip-otherMemberConnections' })
	.when('/search', { templateUrl: '/pages/search' })
	.when('/search/:section', { templateUrl: '/pages/search-section' });
});