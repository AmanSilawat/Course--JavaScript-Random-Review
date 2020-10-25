const xhr = new XMLHttpRequest();

// let formData = new FormData();
// formData.set('name', 'Aman');
// formData.set('msg', "It's Working");

xhr.onload = function () {
    const serverRes = document.getElementById('subHead');
    serverRes.innerHTML = this.responseText;
};

xhr.open('POST', 'phpServer.php');

// allow to access cross origin
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send("name=aman&msg=It's working.");
