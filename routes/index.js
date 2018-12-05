const noteRoutes = require('./note_routes');


module.exports = function(app, db) {

	app.get('/', (req, res) => {
		res.sendFile(__dirname + '/index.html');
	});

	noteRoutes(app, db);

	
};