 // const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	db.collection('Todos').findOneAndUpdate({
		_id: '';
	},{
		$set: {
			completed: false
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});