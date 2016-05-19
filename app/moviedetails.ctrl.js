(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	function MovieDetailsCtrl($routeParams,$location,movieSrv) {
		var moviedVm = this;
	  	/*TODO #4: Load the movie from the movieService using the id form the route params*/
		moviedVm.movie = movieSrv.getMovie($routeParams.movieId);
		moviedVm.$location = $location;
		
		console.log(moviedVm.movie);
	}
})();


