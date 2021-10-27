const express = require('express');
let { port } = require('./config');

const usersRoutes = require('./routes/users.routes');

const app = express();

// settings
app.set('port', port);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usersRoutes);

module.exports = app;
