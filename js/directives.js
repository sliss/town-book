var townBookDirectives = angular.module('townBookDirectives', []);

townBookDirectives.directive('myFirstDirective', function() {
    // return the directive link function.
    return function() {
        console.log("directive confirmed.");
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


		
		}
});