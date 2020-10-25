// create xhr Object
const xhr = new XMLHttpRequest;

// set a function on onload property
xhr.onload = function() {
    if (this.status == 200) {
        try {
            const resObj = JSON.parse(this.responseText);
            console.log(resObj);
        } catch (e) {
            console.warn("There was an error in the JSON file.");
        }
    } else {
        console.warn("Response status is not ok: 200");
    }
};

xhr.open('get', 'data.json')
xhr.send();