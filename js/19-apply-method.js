// parameter using as variables, nothing as an array
function normal(a, b) {
    console.log(a, b);
}

// second argument passing as an array
normal.apply(null, [10, 20]);
// 10, 20

// ---------------

function sum(...arr) {
    return arr.reduce((accumulator, num) => accumulator + num, 0);
}

let res = sum.apply(null, [10, 20, 5, 15]);
console.log(res); // 50
