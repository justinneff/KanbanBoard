var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	stylus = require('stylus');

module.exports = function(app, config) {
	function compile(str, path) {
		return stylus(str).set('filename', path);
	}
	app.use(logger('dev'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));
};
