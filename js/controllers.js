var townBookControllers = angular.module('townBookControllers', []);


townBookControllers.controller('TownListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('towns/towns.json').success(function(data) {
      $scope.towns = data;
    });
 
    $scope.orderProp = 'name';
    
  }]);

townBookControllers.controller('TownDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
  	var slug = $routeParams.townSlug;
    slug = slug.replace(".html","");
    $http.get('townJSON/' + slug + '.json').success(function(data) {
      $scope.town = data;
    });
    if(localStorage.getItem(slug))
    	$scope.comment = localStorage.getItem(slug);
    else
    	$scope.comment = '';

  }]);