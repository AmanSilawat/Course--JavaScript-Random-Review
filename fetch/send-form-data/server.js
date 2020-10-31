const express = require('express');
const app = express();
const server = require('http').Server(app);

// allow accessing diffrent domain 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// secure data transfer
app.use(
    express.urlencoded({
        extended: true
    })
);

// get request
app.get('/', function (req, res) {
    res.send('Again server is running...');
});

// post request
app.post('/auth', function (req, res) {
    res.send(res.json(req.body));
});

// add port
server.listen('3030');