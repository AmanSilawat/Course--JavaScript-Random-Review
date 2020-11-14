const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', function (req, res) {
    res.send('Server is running...');
});

app.post('/data-analyst', function (req, res) {
    console.log(req.body);
    res.send(res.json(req.body));
});

server.listen('3030');