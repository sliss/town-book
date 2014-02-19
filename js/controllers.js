'use strict';

/* Controllers */

var townBookApp = angular.module('townBookApp', []);



townBookApp.controller('TownListCtrl', function($scope, $http) {
  $scope.orderProp = 'name';
  $scope.datum = 'established';
  
  $http.get('towns/towns.json').success(function(data) {
    $scope.towns = data;
  });
});
