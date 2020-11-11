const express = require('express');
const app = express();
const server = require('http').Server(app);

// allow croess origin
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/message', (req, res) => {
    res.send(`This is your chat room id: ${req.query.chatRoomId}`);
});

server.listen(3030);