// Get all elements
const realFileBtn = document.getElementById('real-file');
const customBtn = document.getElementById('custom-button');
const customTxt = document.getElementById('custom-text');

// Add click event on real file input box
customBtn.addEventListener('click', function () {
    realFileBtn.click();
});

// Add input change event on real file input
realFileBtn.addEventListener('change', function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1]; // use regex to choose a only file name
    } else {
        customTxt.innerHTML = 'No file chosen, yet.';
    }
});
