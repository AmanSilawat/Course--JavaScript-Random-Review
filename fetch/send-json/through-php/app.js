const person = {
    name: 'Sanjay',
    age: 28
};

// send json data
fetch('http://localhost/Course--JavaScript-Random-Review/fetch/send-json/data.php', {
    method: 'POST',
    body: JSON.stringify(person),
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(function(res) {
    return res.text();
}).then(function(obj) {
    console.log(obj);
}).catch(function(err) {
    console.error('Something went wrong');
    console.error(err);
});