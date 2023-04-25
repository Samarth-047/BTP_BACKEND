const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	video_url: {
		type: String,
		required: false
	},
	audio_url: {
		type: String,
		required: false
	},
});

module.exports = User = mongoose.model("Users", UserSchema);
