// ! growing memory leak
// var start = document.getElementById('start');
// var stop = document.getElementById('stop');

// var x = [];
// var running = false;

// function grow() {
//     x.push(new Array(100000).join('x'));
//     console.log(x)
//     if (running) {
//         setTimeout(grow, 1000);
//     }
// }

// start.addEventListener('click', function () {
//     running = true;
//     grow();
// });

// stop.addEventListener('click', function () {
//     running = false;
// });



// ! solve memory leak
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let running = false;

start.addEventListener('click', function () {
    let x = [];

    function grow() {
        x.push(new Array(100000).join('x'));
        if (running) {
            setTimeout(grow, 1000);
        }
    }
    running = true;
    grow();
});

stop.addEventListener('click', function () {
    running = false;
});