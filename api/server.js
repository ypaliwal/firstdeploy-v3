var express 	= require('express');
var bodyParser 	= require('body-parser');

var app			= express();
var PORT		= 80;

app.use(express.static(__dirname + './../app'));

//ROUTES
var movie_routes 	= require('./routes/movies');
var init_routes 	= require('./routes/init');

app.use('/api/movies',movie_routes);
app.use('/api/init',init_routes);

app.listen(PORT,function(){
	console.log('Listening on http://localhost:%s',PORT);
	console.log('Stop Server with ctrl + c');
})