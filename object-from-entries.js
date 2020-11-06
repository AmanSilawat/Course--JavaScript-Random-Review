// ! common use: convert a Map to object
const myMap = new Map();

myMap.set('name', 'user1');
myMap.set('age', 27);

// fromEntries method allow only for iterable object
// key value pair
const myObj = Object.fromEntries(myMap);

console.log(myMap);// Map(2) {"name" => "user1", "age" => 27}
console.log(myObj); // {name: "user1", age: 27}

// Array into fromEntries
const array = [ ['name', 'user1'], ['age', 30] ];
console.log(Object.fromEntries(array)); //{name: "user1", age: 30}