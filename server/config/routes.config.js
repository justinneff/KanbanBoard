var boardController = require('../board/board.controller');

module.exports = function(app) {
	app.get('/api/board', boardController.getBoard);

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
	});

	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('*', function(req, res) {
		res.status(404).end();
	});
};