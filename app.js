const dotenv = require('dotenv');
const express = require('express');
const app = express();
const routes = require('./routes');

dotenv.config();

app.use(express.json());

app.use('/', routes);

module.exports = app;