// fill string on array
let arr1 = ['saleh', 'aman', 'sahil'];
arr1.fill('Moien Bhai');
console.log(arr1); // [ 'Moien Bhai', 'Moien Bhai', 'Moien Bhai' ]

//----------------

// fill object on Array
arr1.fill({
    fruit: 'Apple',
    rate: 50,
});
console.log(arr1);
// [ { fruit: 'Apple', rate: 50 },
//   { fruit: 'Apple', rate: 50 },
//   { fruit: 'Apple', rate: 50 } ]

//------------------

// object filled using fill method than all object are same reference
arr1[0].fruit = 'Kiwi';
console.log(arr1);
// [ { fruit: 'Kiwi', rate: 50 },
//   { fruit: 'Kiwi', rate: 50 },
//   { fruit: 'Kiwi', rate: 50 } ]

//------------------

// object filled using map method than all object are unique reference
let arr2 = ['a', 'b', 'c'];
console.log(arr2); // [ 'a', 'b', 'c' ]
arr2 = arr2.map(() => {
    return {
        fruit: 'Mango',
        rate: 50,
    };
});
arr2[0].fruit = 'Banana';
console.log(arr2);
// [ { fruit: 'Banana', rate: 50 },
//   { fruit: 'Mango', rate: 50 },
//   { fruit: 'Mango', rate: 50 } ]
