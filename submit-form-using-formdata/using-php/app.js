// create elements
// const myForm = document.getElementById('myForm');

// submit data using ajax on PHP
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    const request = new XMLHttpRequest();

    request.open('post', 'check-login.php');
    request.onload = function () {
        console.log(request.responseText);
    };
    request.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );
    request.send(formData);

    
});