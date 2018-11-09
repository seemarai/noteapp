var mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({

	title: String,
	note: String,
	createDate:{
		type:Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Notes', NoteSchema)