 // const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// db.collection('Todos').deleteMany({text: 'Hello World'}).then((result) => {
	// 	console.log('Deleted');
	// });

	// db.collection('Todos').deleteOne({text: 'Something else to do'}).then((result) => {
	// 	console.log('Deleted');
	// });
	
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });


	// db.close();
});