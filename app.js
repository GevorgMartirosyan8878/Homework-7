const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();

app.use('/users', authRoutes)

module.exports = app;