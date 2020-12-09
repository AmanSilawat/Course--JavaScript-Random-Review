const onlineState = document.createElement('h3');
onlineState.textContent = "I'm not sure yet!";
document.body.appendChild(onlineState)

// check Default user is online or not
if (navigator.onLine) {
    onlineState.textContent = 'We are Online!';
    onlineState.style.color = 'green';
}

// only trigger when than browser is trying reconnecting to internet
window.addEventListener('online', function () {
    onlineState.textContent = 'We are Online!';
    onlineState.style.color = 'green';
});


// only trigger when than browser is trying reconnecting to internet
window.addEventListener('offline', function () {
    onlineState.textContent = 'We are offline :(';
    onlineState.style.color = 'red';
});