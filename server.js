var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// initialize configuration object
var config = require('./server/config/settings.config')[env];

// configure express
require('./server/config/express.config')(app, config);

// define routes
require('./server/config/routes.config')(app);

// start the server
app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
