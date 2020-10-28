const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.send('This is a HomePage.');
});

app.post('/message', (req, res) => {
    console.log(req.body);
    const resTxt = `Your name is ${req.body['name']} and your country is ${ req.body['country.']}`
    res.send(resTxt);
});

server.listen(3030);