const express = require('express');
const app = express();
const server = require('http').Server(app);
const { PerformanceObserver, performance } = require('perf_hooks');

// t = performance.now();

// allow accessing diffrent domain 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// get request
app.get('/', function (req, res) {
    res.send('Again server is running....');
});

// post request
app.get('/liveUpate', function (req, res) {
    res.send({runningTime: performance.now()});
});


// add port
server.listen('3030');