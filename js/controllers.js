var townBookControllers = angular.module('townBookControllers', []);


townBookControllers.controller('TownListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('towns/towns.json').success(function(data) {
      $scope.towns = data;
    });
 
    $scope.orderProp = 'name';

	$scope.keys = [];
	$scope.comments = [];

  $scope.engageMap = function() {
    var width = 1000,
      height = 600;


    var projection = d3.geo.mercator()
        .center([-72, 42])
        .rotate([0, 0])
        .scale(11000)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
      .projection(projection);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip");


    d3.json("matopo3.json", function(error, mass) {
      svg.selectAll(".subunit")
          .data(topojson.feature(mass, mass.objects.ma).features)
        .enter().append("path")
          .attr("class", function(d) { return "subunit"; })
          .attr("title", function(d) { return d.id; })
          .attr("d", path);
    });


    svg.selectAll(".subunit")
        .data(topojson.feature(mass, mass.objects.ma))
      .enter().append("text")
        .attr("class", "zip-label")
        .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
        .attr("x", function(d) { return d.geometry.coordinates[0] > -1 ? 6 : -6; })
        .attr("dy", ".35em")
        .style("text-anchor", function(d) { return d.geometry.coordinates[0] > -1 ? "start" : "end"; })
        .text(function(d) { return d.id; });
    };  
	
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