var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
	title: { type:String, required:'{PATH} is required' },
	description: String,
	due: Date,
	priority: String,
	listId: mongoose.Schema.Types.ObjectId,
	position: Number,
	closed: { type:Boolean, default:false },
	closedDate: Date
});

mongoose.model('Card', cardSchema);
