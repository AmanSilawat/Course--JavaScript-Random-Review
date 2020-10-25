const express = require('express');
const app = express();
const server = require('http').Server(app);

// Allow Origin Access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// create a slash path
app.get('/', (req, res) => {
    res.send('hello this is working');
});

// send response to frontEnd
app.post('/welcome', (req, res) => {
    res.send({ a: 'aaa' });
});

server.listen(3000);
