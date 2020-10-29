// convert to Prmise
function connectToDatabase(config) {
    // return the promise obj
    return new Promise(function (resolve, reject) {

        // make a connection through mysql
        const connection = mysql.createConnection(config);

        // connect to the database
        connection.connect(function (err) {

            // error handler
            if (err) {
                reject(err);
                return;
            }

            // resove 
            resolve(connection);
        });
    });
}
// pass config object to function
connectToDatabase({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatroom'
}).then(function (conn) { // handle resove part
    console.log('Connection successful');
    conn.end();
}).catch(function (err) { // handle rejection part
    console.log('There was an error connection to the DB');
    console.log(err.message);
});