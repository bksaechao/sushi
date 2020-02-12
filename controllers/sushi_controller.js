const app = require('express').Router();
const sushi = require('../models/sushi');

app.get('/api/sushi', (req, res) => {
	sushi.findAll( results => {
		res.json(results);
	});
});
app.post('/api/sushi', (req, res) => {
	sushi.createOne(req.body, results => {
		res.json(results);
	});
});
app.put('/api/sushi', (req, res) => {
	sushi.updateOne(req.body, results => {
		console.log('results: ', results);
		res.json(results);
	});
});

module.exports = app;