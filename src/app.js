const express = require('express');
let { port } = require('./config');

const app = express();

// settings
app.set('port', port);

module.exports = app;
