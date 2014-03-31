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
      console.log("orderprop changed to " + $scope.orderProp);
      switch($scope.orderProp) {
        case "name":
          var color = d3.scale.threshold()
            .domain([1, 2, 3, 4, 5, 6, 7, 8])
            .range(['#4628e8','#4628e8', '#228dea', '#1cecbc', '#16ee27', '#9af00f', '#f3ab09', '#f50202']);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.victory_district); });
          break;

        case "population":
          var color = d3.scale.threshold()
            .domain([1, 10, 50, 100, 500, 1000, 2000, 5000])
            .range(["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.POP2010 / d.properties.SHAPE_AREA * 2.58999e6); });
          break;

        case "r_deviance_sigma":
          var color = d3.scale.threshold()
            .domain([-50, 1, 1.5])
            .range(['#1D21F5','#6520A5','#AD1F56','#F51F07']);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.sigma_r_deviance); });
          break; 

        case "r_deviance":
          var color = d3.scale.threshold()
            .domain([5, 10, 15, 20, 25, 30, 35])
            .range(['#1D21F5','#3B20D3','#5A20B1','#79208F','#981F6D','#B71F4B','#D61F29','#F51F07']);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.r_deviance); });
          break;   

        case "p_participation":
          var color = d3.scale.threshold()
            .domain([34.44444444444444, 38.888888888888886, 43.333333333333336, 47.77777777777778, 52.22222222222222, 56.66666666666667, 61.111111111111114, 65.55555555555556, 70.0])
            .range(['#E1E4F7', '#E5E6F9', '#CCCEF4', '#B2B6EF', '#999DEA', '#7F85E5', '#666DE0', '#4C54DB', '#333CD6', '#1924D1', '#000CCC']);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.p_participation); });
          break; 

        case "percent_registered_unenrolled":
          var color = d3.scale.threshold()
            .domain([10, 20, 30, 40, 50, 60, 70, 80])
            .range(["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.p_unenrolled); });
          break;  

        case "percent_registered_republicans":
          var color = d3.scale.threshold()
            .domain([3, 6, 12, 15, 18, 21, 24, 27])
            .range(["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"]);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.p_republican); });
          break;  

        case "p_baker":
          var color = d3.scale.threshold()
            .domain([10, 20, 30, 40, 50, 60,70, 80, 90, 100])
            .range(['#E1E4F7', '#E5E6F9', '#CCCEF4', '#B2B6EF', '#999DEA', '#7F85E5', '#666DE0', '#4C54DB', '#333CD6', '#1924D1', '#000CCC']);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.p_baker); });
          break;    

        case "p_patrick":
          var color = d3.scale.threshold()
            .domain([10, 20, 30, 40, 50, 60,70, 80, 90, 100])
            .range(['#E1E4F7', '#E5E6F9', '#CCCEF4', '#B2B6EF', '#999DEA', '#7F85E5', '#666DE0', '#4C54DB', '#333CD6', '#1924D1', '#000CCC']);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.p_patrick); });
          break;     

        case "unemployment_percentage":
          var color = d3.scale.threshold()
            .domain([1,2,3, 4,5, 6,7, 8,9, 10])
            .range(['#E1E4F7', '#E5E6F9', '#CCCEF4', '#B2B6EF', '#999DEA', '#7F85E5', '#666DE0', '#4C54DB', '#333CD6', '#1924D1', '#000CCC']);
           // .domain([2, 4, 6, 8, 10])
           // .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);
      
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.unemployment_percentage); });
          break;    

        case "delta_local_aid_percentage":
          var color = d3.scale.threshold()
            .domain([10,20,30, 40,50, 60,70, 80,90, 100])
            .range(['#E1E4F7', '#E5E6F9', '#CCCEF4', '#B2B6EF', '#999DEA', '#7F85E5', '#666DE0', '#4C54DB', '#333CD6', '#1924D1', '#000CCC']);
          
           d3.selectAll(".town")
            .style("fill", function(d) { return color(Math.abs(d.properties.delta_local_aid_per_capita)); });
          break;   

        case "local_aid_2013":
          var color = d3.scale.threshold()
            .domain([20, 40, 60, 80, 100, 120, 140, 160, 180, 200])
            .range(['#E1E4F7', '#E5E6F9', '#CCCEF4', '#B2B6EF', '#999DEA', '#7F85E5', '#666DE0', '#4C54DB', '#333CD6', '#1924D1', '#000CCC']);
          
           d3.selectAll(".town")
            .style("fill", function(d) { return color(Math.abs(d.properties.local_aid_2013/d.properties.POP2010)); });
          break;       

        default:
          var color = d3.scale.threshold()
            .domain([1, 2, 3, 4, 5])
            .range(["#ddc", "#cdd", "#cdc", "#dcd","ddc"]);
           d3.selectAll(".town")
            .style("fill", function(d) { return color(d.properties.FOURCOLOR); });
          break;
      }
      

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