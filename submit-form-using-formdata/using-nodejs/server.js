const express = require('express');
const app = express();
const server = require('http').Server(app);
// const formidable = require('formidable');
const bodyParser = require('body-parser')

// Allow origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Allow accessing form request data
app.use(
    express.urlencoded({
        extended: true,
    })
);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Home directory');
});

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//send response to frontend
app.post('/submit-form', (req, res) => {
    console.log(req.body);
    console.log( req.body.username );    
});

// POST /login gets urlencoded bodies
// app.post('/submit-form', urlencodedParser, function (req, res) {
//     console.log( req.body );
//     console.log( req.body.username );
// })

// POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//     // create user in req.body
// })

server.listen(3030);