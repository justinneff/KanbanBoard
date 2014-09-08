var List = require('mongoose').model('List'),
	Card = require('mongoose').model('Card');

module.exports = function() {
	List
		.find({})
		.exec(function(err, collection) {
			if (collection.length == 0) {
				List.create({ title: 'To Do', cardLimit: 0, position: 1 }, function(err, todo) {
					Card.create({ title: 'Task 1', listId: todo._id, position:1 });
					Card.create({ title: 'Task 2', listId: todo._id, position:2 });
				});
				List.create({ title: 'Doing', cardLimit: 3, position: 2 }, function(err, doing) {
					Card.create({ title: 'Task 3', description: 'This task has a description', listId: doing._id, position:1 });
					Card.create({ title: 'Task 4', listId: doing._id, priority: 'high', position:2 });
					Card.create({ title: 'Task 5', listId: doing._id, position:3 });
				});
				List.create({ title: 'Done', cardLimit: 0, position: 3 });
			}
		});
};