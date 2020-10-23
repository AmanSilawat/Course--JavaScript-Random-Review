// Function argument
const array1 = [10, 20, 30];

function sum(a, b, c) {
    return a + b + c;
}

const result = sum(...array1);
console.log(result); // 60

// while creaing an array
const array2 = [1, 2, ...array1, 3];
console.log(array2); // [1, 2, 10, 20, 30, 3]

// copy an array
const arr2Copy = [...array2]; // make a unique copy
console.log(arr2Copy); // [1, 2, 10, 20, 30, 3]

arr2Copy.push(9);
console.log(arr2Copy);
// [1, 2, 10, 20, 30, 3, 9]
// doesn't change on a2 array


// Concatenate
let a3 = [70, 80, 90]
let res =  [...array1, ...a3];
console.log(res); // [10, 20, 30, 70, 80, 90]

// Object
const obj = {
    name: 'Raju',
    age: 25
};

// Copy an Object
const obj2 = { ...obj }
console.log(obj2); // {name: "Raju", age: 25}

// dom and dome2 is individual Object
obj2.name = 'Imtiyaj';
console.log(obj); // {name: "Raju", age: 25}
console.log(obj2); // {name: "Imtiyaj", age: 25}