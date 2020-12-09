const str = 'string';

// Map function to call on every element of the array.
let newArr = Array.from(str, function(char) {
    return `PREFIX_${char.toUpperCase()}`;
});

console.log(newArr);

// ...
// .. set to map 
// remove duplicate element
const arr = [1, 1, 2, 3, 5, 5];
let set = new Set(arr);
console.log(Array.from(set));
