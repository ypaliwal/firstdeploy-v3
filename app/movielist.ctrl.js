(function(){
	angular
		.module('coderMdb')
		.controller('MovieListCtrl', MovieListCtrl);

	function MovieListCtrl($location,movies) {
		var movielVm = this;
	  /*TODO #3: Load all of the movies from the movieService*/
	  	movielVm.movies = movies;

	  	
	  	movielVm.sortOptions = [
		    {label: 'Title', sortField: 'Title', reverse: false},
		    {label: 'Rating', sortField: "imdbRating", reverse: true}
		]
	  
	  	movielVm.curPage = 0;
	  	movielVm.moviesPerPage = 4;
	  	movielVm.numPages = Math.ceil(movielVm.movies.length/movielVm.moviesPerPage);

	  	//Public Methods
	  	movielVm.goToMovie = goToMovie;

	  	function goToMovie(movie){
	  		$location.path('/movie/'+movie.imdbID);
	  	}
	}
})();
