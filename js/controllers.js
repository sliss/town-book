var townBookControllers = angular.module('townBookControllers', []);


townBookControllers.controller('TownListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('towns/towns.json').success(function(data) {
      $scope.towns = data;
    });
 
    $scope.orderProp = 'name';

  	$scope.keys = [];
  	$scope.comments = [];

    $scope.$watch("orderProp", function() {
      console.log("orderprop changed to" + $scope.orderProp);
      d3.selectAll(".town")
        .style("fill",'#222')
        .attr("class", function(d) { 
          console.log(d.properties.TOWN);
          return "town " + d.properties.TOWN; });

    }); 
	
    for (var i = 0; i < localStorage.length; i++) {
    	$scope.comments.push(localStorage.getItem(localStorage.key(i)));   
    	$scope.keys.push(localStorage.key(i));
    }	 
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