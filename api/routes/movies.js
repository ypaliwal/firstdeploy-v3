var router 	= require('express').Router();
var models	= require('./../models');

//get all movies
router.get('/',function(req,res){
	models.Movies.findAll().then(function(movies){
		//findall returns an array of objects
		res.json(movies);
	})
	.catch(function(err){
		res.status(400)
		   .json({err:err});
	});
});

router.get('/:movieId',function(req,res){
	var where = {where:{imdbID:req.params.movieId}};
	models.Movies.find(where).then(function(movie){
		//find returns a single object
		res.send(movie);
	})
	.catch(function(err){

		res.status(400)
		   .json({err:err})
	})

});


module.exports = router;
