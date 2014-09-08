var List = require('mongoose').model('List'),
	Card = require('mongoose').model('Card');

exports.getBoard = function(req, res) {
	var board = {};
	List
		.find({})
		.exec(function(err, collection) {
			board.lists = collection;
			Card
				.find({ closed:false })
				.exec(function(err, collection) {
					board.cards = collection;
					res.send(board);
				});
		});
};