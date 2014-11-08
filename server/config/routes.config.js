var boardController = require('../board/board.controller');

module.exports = function(app, config) {
	app.get('/api/board', boardController.getBoard);

	app.get('/partials/*', function(req, res) {
		res.sendFile(config.rootPath + '/public/app/' + req.params[0]);
	});

	app.all('*', function(req, res) {
		res.sendFile(config.rootPath + '/public/index.html');
	});
};
