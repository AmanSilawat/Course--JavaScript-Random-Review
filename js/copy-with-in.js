// ! usefull in drag & drop, change ordring

var arr = ['q', 'w', 'e', 'r', 't', 'y'];

console.log(arr);
arr.copyWithin(0, 3, 4);
//             ^  ^   ^----------End point
//        target  |
//                start point

console.log(arr);

// output is
// [ 'q', 'w', 'e', 'r', 't', 'y' ]   :line no. 3
// [ 'r', 'w', 'e', 'r', 't', 'y' ]   :line no. 9


console.log('------------');


// both example output is same
var arr = ['q', 'w', 'e', 'r', 't', 'y'];
arr.copyWithin(0, 3, -1);
console.log(arr);

console.log('------------');
var arr = ['q', 'w', 'e', 'r', 't', 'y'];
let sameArr = arr.copyWithin(0, 3, 5);
console.log(arr);

// modify the original array
console.log(sameArr === arr);

// [ 'r', 't', 'e', 'r', 't', 'y' ]
// [ 'r', 't', 'e', 'r', 't', 'y' ]