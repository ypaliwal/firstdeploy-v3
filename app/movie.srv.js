(function(){
    
    angular
        .module('coderMdb')
        .service('movieSrv', MovieService);

    function MovieService($http) {
        var self = this;
        //In a real application this would be loaded from a server
        self.movies = [];

        //function bindings
        self.getMovies = getMovies;
        self.getMovie = getMovie;

        function getMovies(){
          if(self.movies.length == 0){
            return $http.get('/api/movies')
                  .then(function(res){
                    console.log(res);
                    self.movies = res.data;
                    return self.movies;
                  });
          }
          else{
            return self.movies;
          }
        };

        function getMovie(id){
          return self.movies.filter(function(movie) {return movie.imdbID === id})[0];
        };


    }
})();
