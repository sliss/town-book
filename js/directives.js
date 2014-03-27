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

		var width = 1000,
		    height = 500;

		var projection = d3.geo.mercator()
		    .center([-72, 42])
		    .rotate([0, 0])
		    .scale(11000)
		    .translate([width / 2, height / 2]);

		var path = d3.geo.path()
		    .projection(projection);

		var svg = d3.select("theMap").append("svg")
		    .attr("width", width)
		    .attr("height", height);      

		d3.json("MA_Topo_Properties.json", function(error, ma) {
		  svg.selectAll(".town")
		    .data(topojson.feature(ma, ma.objects.MA_Towns).features)
		  .enter().append("path")
		    //.attr("class", function(d) { return "town " + d.properties.TOWN; })
		    .attr("class", function(d) { return "town " + d.properties.TOWN; })
		    .style("fill", function(d) { return color(d.properties.victory_district); })
		    .attr("title", function(d) { return d.properties.TOWN; })
		    .attr("d", path);  

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