var express = require('express');

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
app.set('views', config[env].rootPath + '/server/views');
app.set('view engine', 'jade');

// define views
app.get('/', function(req, res) {
	res.render('index');
});

app.get('*', function(req, res) {
	res.status(404).end();
});

// start the server
app.listen(config[env].port);
console.log('Listening on port ' + config[env].port + '...');
