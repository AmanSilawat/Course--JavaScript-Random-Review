const express = require('express');
const app = express();
const server = require('http').Server(app);

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
    res.send('Hello this is working...');
});

//send response to frontend
app.post('/submit-form', (req, res) => {
    let result = checkCredential(req.body);

    res.send(result);
});

server.listen(3000);

// check Credential
function checkCredential(formData) {
    let username = formData['username'].trim() || '';
    let password = formData['password'].trim() || '';

    let ok = true;
    let msg = [];

    if (!username) {
        ok = false;
        msg.push('Username cannot be empty!');
    }

    if (!password) {
        ok = false;
        msg.push('Password cannot be empty!');
    }

    if (ok) {
        if (username == 'aman' && password == 'aman') {
            ok = true;
            msg.push('Successful login!');
        } else {
            ok = false;
            msg.push('Incorrect username/password combination!');
        }
    }

    return JSON.stringify({ ok: ok, msg: msg });
}
