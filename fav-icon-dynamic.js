// create two btn
let favOneBtn = document.createElement('button');
let favTwoBtn = document.createElement('button');

favOneBtn.textContent = 'Gradient Favicon';
favTwoBtn.textContent = 'Yellow Favicon';

document.body.appendChild(favOneBtn);
document.body.appendChild(favTwoBtn);

// get favicon link Element
const favicon = document.querySelector('link[rel="shortcut icon"]');


favOneBtn.onclick = function() {
     favicon.setAttribute('href', '/img/monitor.png');
}

favTwoBtn.onclick = function() {
    favicon.setAttribute('href', '/img/monitor-yellow.png');
}