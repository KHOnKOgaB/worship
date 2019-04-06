const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

const Datastore = require('nedb');
const db = new Datastore({ filename: './db/datafile', autoload: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/build'));

// require('./routes')(app, {});

// res.sendFile(__dirname + './index.html')

require('./routes')(app, db);

app.listen(port, () => {
	console.log('We are live on ' + port);
});
