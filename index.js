const express = require('express');
const app = express();

require('dotenv').config()
const btoa = require('btoa')
const { createConnection } = require('./db');
const { sendEvent } = require('./event');
const mongoose = require('mongoose');
const CronJob = require('cron').CronJob;

const { AUTH_USER, AUTH_PASS, API_URL, DB_NAME } = process.env;
const PORT = process.env.PORT || 3000;
app.use(express.json());

function checkConnection(db, headers) {
	if (db.readyState === 1) {
		console.log('connected to db...')
	}

	if (db.readyState === 0) {
		console.log('database connection terminated...');
		sendEvent(API_URL, headers)
	}
}

async function start() {
	try {
		const request_headers = {
			'Content-type': 'application/json',
			'Accept': 'application/json',
			'Authorization': `Basic ${btoa(`${AUTH_USER}:${AUTH_PASS}`)}`
		};

		const db = mongoose.connection;
		createConnection(DB_NAME);

		app.listen(PORT, () => {
			console.log(`Application started on port ${PORT}`);
			console.clear();
			new CronJob(
				process.env.CRON_SCHEDULE,
				() => checkConnection(db, request_headers),
				null,
				true
			);
		});
	}
	catch (error) {
		console.log(`500 Internal Server Error`);
		console.log(`Please restart application...`);
	}
}

start();