'use strict';
import 'dotenv/config';

import Http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

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

app.use('/', require('./routes')); 

server.listen(PORT, () => console.log(`Kanban API is live on port ${PORT}`));