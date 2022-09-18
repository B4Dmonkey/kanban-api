'use strict';
import Http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const PORT = 3000;
const HOST = '0.0.0.0';
const API_VERION = '/api/v1';

const app = express();
const server = Http.createServer(app);

// body json parser configuration
app.use(bodyParser.json());

app.get('/', (req, res) => {
	try {
		res.status(200).json({ details: 'Kanban API is live.' });
	} catch (e) {
		console.log(`Internal Server Error: ${e}`);
		return res.status(500).json({
			error: e.toString()
		});
	}
});

server.listen(PORT, () => console.log(`Kanban API is live on port ${PORT}`));