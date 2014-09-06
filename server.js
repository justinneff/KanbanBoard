var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// initialize configuration object
var config = {
	development: {
		rootPath: __dirname,
		port: process.env.PORT || 3000
	}
};

// configure express
function compile(str, path) {
	return stylus(str).set('filename', path);
}
app.set('views', config[env].rootPath + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(stylus.middleware(
	{
		src: config[env].rootPath + '/public',
		compile: compile
	}
));
app.use(express.static(config[env].rootPath + '/public'));

// define routes
app.get('/partials/*', function(req, res) {
	res.render('../../public/app/' + req.params[0]);
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('*', function(req, res) {
	res.status(404).end();
});

// start the server
app.listen(config[env].port);
console.log('Listening on port ' + config[env].port + '...');
