const app = require('express').Router();

const sushi = require('../models/sushi');

app.get('/', function(req, res) {
	sushi.findAll(function(results) {
		res.render('index', { hbObj: results });
	});
});

module.exports = app;
