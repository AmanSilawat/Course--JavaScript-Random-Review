// create img node
let img1 = document.createElement('img');
img1.src = "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=7952&q=80 7952w";
img1.style.maxWidth = "100%";

// clone and reuse img node
let img2 = img1.cloneNode();
img2.src = "https://images.unsplash.com/photo-1592170091352-4512e84ad10c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80 3024w";

// images append to html page
document.body.appendChild(img1);
document.body.appendChild(img2);

// this first
document.addEventListener('DOMContentLoaded', function() {
    alert ('DOM is loaded');
});

// this second
img1.addEventListener('load', function() {
    alert ('book is loadded');
});

// this third
img2.addEventListener('load', function() {
    alert ('Code is loadded');
});

// this fourth
window.addEventListener('load', function() {
    alert ('Page is loaded');
});