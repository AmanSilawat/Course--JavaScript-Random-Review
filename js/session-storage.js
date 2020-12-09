// define a obj
const obj = {
    name: 'user1',
    age: 20
};

// set data into sessionStorage
sessionStorage.setItem('occupation', 'Software Developer');
sessionStorage.setItem('person', JSON.stringify(obj))

// get data into sessionStorage
console.log(sessionStorage.getItem('occupation')); // Software Developer
console.log(sessionStorage.getItem('person')); // String: {"name":"user1","age":20}

// overwite session data 
sessionStorage.setItem('occupation', 'Doctor');

// deserialize Object
console.log(JSON.parse( sessionStorage.getItem('person')) ); // Object: {"name":"user1","age":20}

// get all data through loop
for(let i = 0; i < sessionStorage.length; i++) {
    key = sessionStorage.key(i);
    console.log(`${key} => ${sessionStorage.getItem(key)}`);
}

// remove item on sessionStorage
sessionStorage.removeItem('occupation');
console.log( sessionStorage.getItem('occupation') ); // null

// clear all sessionStorage data
sessionStorage.clear();