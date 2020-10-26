// create elements trhow Object
const form = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    submit: document.getElementById('btnSubmit'),
    formMsg: document.getElementById('form-msg'),
};

// submit data using ajax on PHP
form.submit.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.onload = function () {
        let responseObj = null;

        try {
            responseObj = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON!');
        }

        if (responseObj) {
            handleResponse(responseObj);
        }
    };

    // set form data
    const requestData = `username=${form.username.value}&password=${form.password.value}`;

    request.open('post', 'check-login.php');
    // using setRequestHeader(), after calling open() before calling send()
    request.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );
    request.send(requestData);
});

// perform on response
function handleResponse(responseObj) {
    // The credential is right then redirect the page
    if (responseObj.ok) {
        location.href = 'dashboard.html';
    } else {
        // Remove all previes Error message
        while (form.formMsg.firstChild) {
            form.formMsg.removeChild(form.formMsg.firstChild);
        }

        // Print all Error messages
        responseObj.msg.forEach((msg) => {
            const li = document.createElement('li');
            li.textContent = msg;
            form.formMsg.appendChild(li);
        });

        form.formMsg.style.display = 'block';
    }
}
