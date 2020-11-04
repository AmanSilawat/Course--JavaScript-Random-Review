// match 3 alpha numaric character (at least one match) : get the true and false
var re = /\w{4}/;
console.log(re.test('hello')); // true
console.log(re.test('hi')); // false

// match 3 alpha numaric character (at least one match) : get the index value
console.log('hi, frd what are you doing'.search(re)); // 8
console.log('hi, frd'.search(re)); // -1

// return a array (more bit details)
console.log(re.exec('hi, aman')); // ["aman", index: 4, input: "hi, aman", groups: undefined]



// ..
// ....
// ......
// Match the string Contains or not
/*

Possible matches:
    -Hello, dom. You have 5 tasks remaining.
    -Greetings, Jonny. You have 1 task remaining.

*/
// ^ : match the bigining of the string
// $ : match the end of the string
// . : accept any charcter
// \. : skip (accept any charcter) use only dot perid
// ? : before one word is optional
var re = /^\w+, \w+\. You have \d+ tasks? remaining\.$/;

console.log(re.test('Hello, dom. You have 5 tasks remaining.')); // true
console.log(re.test('Greetings, Jonny. You have 1 task remaining.')); // true


// ..
// ....
// ......
// I use 3 capture group 
 
var re = /(\w+), (\w+)\. You have (\d+) tasks? remaining\./;

// 0 index : all matches text here
// 1 to n  : group value
console.log(re.exec('xyz Hello, dom. You have 5 tasks remaining.')); // array
console.log(re.exec('Greetings, Jonny. You have 1 task remaining.')); // array
console.log(re.exec('Greetings, Jonny. You have 1 task remaining')); // null 

// exec and match is same
console.log('Greetings, Jonny. You have 1 task remaining.'.match(re)); // array
