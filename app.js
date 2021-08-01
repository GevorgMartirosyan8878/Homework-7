const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();

app.use('/users', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello')
})

module.exports = app;