const data = new FormData();

data.append("name", "Aman");
data.append("age", "27");


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log( this.responseText );
    }
};
xhr.open('POST', 'http://localhost:3000/welcome', true); // use server path (/welcome)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send();
