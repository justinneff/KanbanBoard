var mongoose = require('mongoose');

// create list schema
var listSchema = mongoose.Schema({
	title: { type:String, required:'{PATH} is required!'},
	cardLimit: Number,
	position: Number
});

// define List model
mongoose.model('List', listSchema);
