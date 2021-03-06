const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8000;

const sushiController = require('./controllers/sushi_controller');
const htmlRoutes = require('./routes');

const app = express();

//for parsing json in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//configure handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//for our controller routes
//or api routes
app.use(sushiController);
app.use(htmlRoutes);

app.listen(PORT, function() {
	console.log(`PORT IS LISTENING ON ${PORT}`);
});

