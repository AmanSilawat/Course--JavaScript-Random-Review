const { urlencoded } = require("express");

const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // get form data 
    const formData = new FormData(this);

    // create instanceof URLSearchParams
    const usp = new URLSearchParams();

    // make a key value pair through formData
    for (const pair of formData) {
        usp.append(pair[0], pair[1])
    }

    console.log(usp.toString());
    
    // send form data
    fetch('http://localhost:3030/auth', {
        method: 'post',
        body: formData,
        // body: usp,
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(res) {
        return res.json();
    }).then(function(obj) {
        console.log(obj);
    }).catch(function(err) {
        console.error('Something went wrong');
        console.error(err);
    });

});
