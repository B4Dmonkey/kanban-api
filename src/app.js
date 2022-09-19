'use strict';
import 'dotenv/config';

import Http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import task from './routes/task.route';

const PORT = 3000;
const HOST = '0.0.0.0';
const API_VERSION = '/api/v1';
const app = express();
const server = Http.createServer(app);

// body json parser configuration
app.use(bodyParser.json());

mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', error => console.error(error));

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

app.use('/task',task);

server.listen(PORT, () => console.log(`Kanban API is live on port ${PORT}`));