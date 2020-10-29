const express = require('express');
const { restart } = require('nodemon');
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

// use with GET Method -----
app.get('/message', (req, res) => {
    let originUrl = req.originalUrl;
    let formData = new URLSearchParams( originUrl.split('?')[1] );
    const resTxt = `Your name is ${formData.get('name')} and your country is ${formData.get('country')}`;
    console.log(resTxt);

    console.log(Array.from(formData));
    res.send(resTxt);
});

// use with POST Method -----
// app.post('/message', (req, res) => {
//     console.log(req.body);
//     const resTxt = `Your name is ${req.body['name']} and your country is ${ req.body['country.']}`
//     res.send(resTxt);
// });

server.listen(3030);