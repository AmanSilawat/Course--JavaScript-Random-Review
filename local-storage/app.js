// get Elements
const inputKey = document.getElementById('inputKey');
const inputVal = document.getElementById('inputVal');
const btnInsert = document.getElementById('btnInsert');
const btnClear = document.getElementById('btnClear');
const isOutput = document.getElementById('isOutput');

// Insert Button
btnInsert.onclick = function () {
    const key = inputKey.value;
    const value = inputVal.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

// Clear Button
btnClear.onclick = function () {
    localStorage.clear();
    location.reload();
};

// Load localStorage content on pageLoad
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    isOutput.innerHTML += `${key}: ${value}<br/>`;
}
