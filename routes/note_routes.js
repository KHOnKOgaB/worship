module.exports = function(app, db_) {


	app.get('/notes', (req, res) => {
		db_.find({}, (err, arr) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(arr);
			}
		});

	});

	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': id };
		db_.findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(item);
			}
		});

	});

	app.post('/notes', (req, res) => {

		const note = { text: req.body.body, title: req.body.title };

		db_.insert(note, (err, newDoc) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(newDoc);
			}
		});


	});

	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		db_.remove({ _id: id }, {}, (err, numRemoved) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send('Note ' + numRemoved + ' deleted!');
			}
		});
	});

	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		const note = { text: req.body.body, title: req.body.title };
		db_.update(details, note, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(note);
			}
		});
	});
}