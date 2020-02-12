const orm = require('../config/orm');


const sushi = {
	findAll: function(callbackFunction) {
		orm.findAll('sushi', function(resultsData) {
			callbackFunction(resultsData);
		});
	},
	createOne: function(createData, callbackFunction) {
		const columns = ['sushi_name', 'devoured'];
		const values = [createData.sushi_name, createData.devoured];

		orm.createOne('sushi', columns, values, function(resultsData) {
			callbackFunction(resultsData);
		});
	},
	updateOne: function(updateData, callbackFunction) {
		const condition = `id=${updateData.id}`;
		delete updateData.id;

		orm.updateOne('sushi', updateData, condition, function(resultsData) {
			callbackFunction(resultsData);
		});
	}
};
  module.exports = sushi;
  