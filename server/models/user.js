var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true // clears out leading and trailing spaces
	}
});

module.exports = {User};