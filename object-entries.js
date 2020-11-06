const person = {
    name: 'User1',
    age: 25
};

// output is key value pair in array formate
console.log(Object.entries(person)); // [ ["name", "User1"], ["age", 25] ]


// Object.entries use with URLSearchParams
const params = new URLSearchParams( Object.entries(person) );
console.log(params.toString()); // name=User1&age=25