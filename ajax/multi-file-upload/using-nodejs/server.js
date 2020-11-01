const express = require('express');
const app = express();
const server = require('http').Server(app);

// multer to handle file upload
const multer = require('multer');
const upload = multer();

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
app.post('/upload', upload.any(), function (req, res) {
    console.log(req.files);
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('Done.');
});

// add port
server.listen('3030');