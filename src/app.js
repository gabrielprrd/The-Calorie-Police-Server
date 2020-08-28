const cors = require('cors');
const express = require('express');

const app = express();

// Enviroment variables configuration
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use(require('./routes'));

module.exports = app;
