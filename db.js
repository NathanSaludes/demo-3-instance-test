const mongoose = require('mongoose')

const createConnection = async (db_name) => {
	try {
		const connection = await mongoose.connect(`mongodb://localhost/${db_name}`,
			{ useNewUrlParser: true, useUnifiedTopology: true });

		if (connection) {
			console.log("Successfully connected to database...");
		}
	}
	catch (error) {
		console.clear();
		console.log('Failed to initialize connection from MongoDB');
		throw error;
	}
}

module.exports = {
	createConnection
}