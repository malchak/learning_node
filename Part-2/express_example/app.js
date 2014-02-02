
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/', function(req, res){
	var user = {
		first_name: 'Lou',
		surname:    'Dobbs',
		address: 		'Some corporate building, Washington D.C.',
		facebook_frinds: '500'
	};
	res.render('index.jade', { title: 'User', user: user });
});

app.get('/about', function(req, res){
	res.send('Hello from the about route!');
});

app.get('/users', user.list);

app.post('/', function(req, res){
	res.send(req.body);
});

app.get('/user/:id', function(req, res){
	res.send('show content for user id ' + req.params.id);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
