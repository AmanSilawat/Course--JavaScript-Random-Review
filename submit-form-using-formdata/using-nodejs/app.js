// create elements
// const myForm = document.getElementById('myForm');

// submit data using ajax on PHP
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    const request = new XMLHttpRequest();
    
    request.onload = function () {
        console.log(request.responseText);
    };
    request.open('post', 'http://localhost:3030/submit-form');
    request.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    let x = new FormData();
    x.append("name", "aman")
    x.append("country", "India")
    console.log(Array.from(formData));

    request.send(formData);

    
});