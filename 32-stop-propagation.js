// create a box element
let box = document.createElement('div');
box.style.cssText = `
    width: 200px;
    height: 200px;
    border: 2px solid black;
    display:flex;
    justify-content: center;
    align-items: center;
`;

// create a button element
let btn = document.createElement('button');
btn.textContent = 'Click Me';

// append element
box.appendChild(btn);
document.body.appendChild(box)

// click on box or button both time chnage the bg color
box.onclick = function() {
    this.style.backgroundColor = 'purple';
}

// click on btn don't change the box bg color
btn.onclick = function(e) {
    e.stopPropagation();
}