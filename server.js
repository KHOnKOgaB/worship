const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const dbURL = require('./config/db');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// require('./routes')(app, {});

MongoClient.connect(dbURL.url, { useNewUrlParser: true }, (err, database) => {
	if (err) return console.log(err)

	var db = database.db('notes__test')

	require('./routes')(app, db);
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});               
})