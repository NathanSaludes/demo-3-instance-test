const axios = require('axios').default;
require('dotenv').config()

const throttle = (fn, delay) => {
	let last = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - last < delay) {
			return;
		}
		last = now;
		return fn(...args);
	}
}

async function sendEvent(API_URL, REQUEST_HEADERS) {
	try {
		const eventData = {
			description: 'MongoDB Server Down. Connection Interruption.',
			source: 'MongoDB Server [Demo3InstanceTest]',
			type: 'Database',
			resource: process.env.DB_NAME,
			metric_name: 'Connection Status',
			processing_notes: '',
			severity: '1',
		}

		const response = await axios.post(API_URL, eventData, {
			headers: REQUEST_HEADERS
		});

		console.log('Event sent to servicenow!');
	}
	catch (error) {
		console.log(err.response.data);
	}
}

module.exports = {
	sendEvent: throttle(sendEvent, (parseInt(process.env.EVENT_TIMEOUT_SECONDS) * 1000))
}