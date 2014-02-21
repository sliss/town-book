var townBookFilters = angular.module('townBookFilters', []);

townBookFilters.filter('searchName', function() {
  return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(town){

			if(town.name.toLowerCase().indexOf(searchString) !== -1){
				result.push(town);
			}

		});

		return result;
  };
});

townBookFilters.filter('searchStorage', function() {
  return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(town){
		if(localStorage.getItem(town.slug)) {
			if(localStorage.getItem(town.slug).toLowerCase().indexOf(searchString) !== -1){
				result.push(town);
			}
		}	

		});

		return result;
  };
});