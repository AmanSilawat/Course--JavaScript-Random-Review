let obj = {
    name: 'user1',
    age: 25
}

// block: adding new property or remove property
Object.seal(obj);

// not added the property in the object
// throw an error in strict mode
obj.occupation = 'Doctor';

console.log(obj);