// const data = new FormData();

// data.append("name", "Aman");
// data.append("age", "27");

// console.log(data);

// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'form-data-web-api/myPhp.php', true);
// xhr.send("orem=ipsum&name=binny");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log( this.responseText );
    }
};
xhttp.open('POST', 'form-data-web-api/myPhp.php', true);
console.log(xhttp.send());
