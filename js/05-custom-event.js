// create h2 element
const headerTag = document.createElement('h2');
headerTag.id = 'number';
headerTag.innerHTML = '0';

// append h2 tag into body
document.body.appendChild(headerTag);

// add numberChange Event
headerTag.addEventListener('numberChanged', function (e) {
    headerTag.textContent = e.detail.number;
    headerTag.style.color = e.detail.textColor; // e.detail is property of event
});


function chnageNumber(n, c) {

    // declare my cutome event
    const event = new CustomEvent('numberChanged', {
        detail: {
            number: n,
            textColor: c,
        },
    });

    // calling the event
    headerTag.dispatchEvent(event);
}

chnageNumber(5, "red")
// chnageNumber(9999, "green")