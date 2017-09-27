// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name: 'Harshit', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');


	db.collection('Todos').insertOne({
		_id: 123,
		text: 'Something else to do',
		completed: false
	}, (err, result)=>{
		if (err) {
			return console.log('Unable to insert Todo');
		}
		console.log(JSON.stringify(result.ops, undefined,2));
	});


	
	db.close();
});