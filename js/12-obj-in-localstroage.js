//Create an Object
let obj = {
    name: 'Aman',
    age: 26,
};

// object convert to stringify using JSON object
let objSerialized = JSON.stringify(obj);
localStorage.setItem("myObj", objSerialized);

// And parse back to JSON again with parse()
let objDeserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(objDeserialized); // {name: "Aman", age: 26}