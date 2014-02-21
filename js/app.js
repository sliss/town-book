var townBookApp = angular.module('townBookApp', [
	'ngRoute',
	'townBookControllers'

]);


townBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/town-list.html',
        controller: 'TownListCtrl'
      }).
      when('/new-towns/:townSlug', {
        templateUrl: 'partials/town-detail.html',
        controller: 'TownDetailCtrl'          
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);