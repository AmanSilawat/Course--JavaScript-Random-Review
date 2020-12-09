const myInput = document.getElementById('txt');
myInput.addEventListener('blur', function (e) {
    const val = e.target.value;

    if (val.match(/php/i)) {
        alert("the value cann't contain 'php'.");
    }
});
