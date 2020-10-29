// normal way connect to a DB
// please run only on nodejs
// please first install 'npm install mysql' in terminal
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localshost',  // ----------------
    user: 'root',
    password: '',
    database: 'chatroom'
});

// create the connection
connection.connect(function (err) {

    // error handlar 
    if(err) {
        console.log('There was an error!');
        return;
    }

    console.log('Connection successful!');
    
    // Each time end the connection
    connection.end();
});