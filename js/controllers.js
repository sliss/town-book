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
    $http.get('townJSON/' + $routeParams.townSlug + '.json').success(function(data) {
      $scope.town = data;
    });
    
    $scope.comment = localStorage.getItem($routeParams.townSlug)

  }]);