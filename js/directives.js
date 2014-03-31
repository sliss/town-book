var townBookDirectives = angular.module('townBookDirectives', []);

townBookDirectives.directive('myFirstDirective', function() {
    // return the directive link function.
    return {
    	scope: { mapMode: '=' },
    	link: function() {
	        console.log("directive confirmed.");

	        /*var color = d3.scale.threshold()
	            .domain([1, 2, 3, 4, 5])
	            .range(["#ddc", "#cdd", "#cdc", "#dcd","ddc"]);
			*/
			var color = d3.scale.threshold()
		        .domain([1, 2, 3, 4, 5, 6, 7, 8])
		        .range(['#4628e8','#4628e8', '#228dea', '#1cecbc', '#16ee27', '#9af00f', '#f3ab09', '#f50202']);

			var width = 700,
			    height = 460;

			var projection = d3.geo.mercator()
			    .center([-71.7, 42])
			    .rotate([0, 0])
			    .scale(11000)
			    .translate([width / 2, height / 2]);

			var path = d3.geo.path()
			    .projection(projection);

			var svg = d3.select("theMap").append("svg")
			    .attr("width", width)
			    .attr("height", height)
			    .attr("xmlns","http://www.w3.org/2000/svg")
			    .attr("version",1.1);   
			     

			d3.json("MA_Topo_Properties.json", function(error, ma) {
			  svg.selectAll(".town")
			    .data(topojson.feature(ma, ma.objects.MA_Towns).features)
			  .enter().append("path")
			    //.attr("class", function(d) { return "town " + d.properties.TOWN; })
			    .attr("class", function(d) { return "town " + d.properties.TOWN; })
			    .style("fill", function(d) { return color(d.properties.victory_district); })
			    .attr("title", function(d) { return d.properties.TOWN; })
			    .attr("d", path) 
			  .append("svg:a")
			  	.attr("xlink:href", "stevenliss.com");  
			     

			  

			  svg.append("path")
			      .datum(topojson.mesh(ma, ma.objects.MA_Towns, function(a, b) { return a !== b; }))
			      .attr("class", "tract-border")
			      .attr("d", path);  
			});

			//console.log(d3.select(".HINGHAM").enter().d.properties.SHAPE_AREA);
			//d3.select(".HINGHAM").attr("title", "selectify!");
			
			}
	}	
});

townBookDirectives.directive('resultsChart', function() {
    // return the directive link function.
    return {
    	scope: { mapMode: '=' },
    	link: function() {
	        console.log("chart directive confirmed.");

	        var width = 960,
		    height = 500,
		    radius = Math.min(width, height) / 2;

			var color = d3.scale.ordinal()
			    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

			var arc = d3.svg.arc()
			    .outerRadius(radius - 10)
			    .innerRadius(0);

			var pie = d3.layout.pie()
			    .sort(null)
			    .value(function(d) { return d.population; });

			var svg = d3.select("body").append("svg")
			    .attr("width", width)
			    .attr("height", height)
			  .append("g")
			    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

			d3.csv("test.csv", function(error, data) {

			  data.forEach(function(d) {
			    d.population = +d.population;
			  });

			  var g = svg.selectAll(".arc")
			      .data(pie(data))
			    .enter().append("g")
			      .attr("class", "arc");
/*
			  g.append("path")
			      .attr("d", arc)
			      .style("fill", function(d) { return color(d.data.age); });

			  g.append("text")
			      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
			      .attr("dy", ".35em")
			      .style("text-anchor", "middle")
			      .text(function(d) { return d.data.age; });*/

			});

		}
	}	
});