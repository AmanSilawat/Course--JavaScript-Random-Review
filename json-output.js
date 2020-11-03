// ! toJSON : chnage json output

// ....
//..........
// Normal object look like
const person = {
    name: 'Aman',
    age: 26
}

const obj = {
    data: person
}

console.log(JSON.stringify(obj)); // {"data":{"name":"Aman","age":26}}


// ....
//..........
// toJSON use in object
const person2 = {
    name: 'Aman',
    age: 26,
    toJSON:  function() {
        return `my name is ${this.name} and me ${this.age} year old.`
    }
}

const obj2 = {
    data: person2
}

console.log(JSON.stringify(obj2)); // {"data":"my name is Aman and me 26 year old."}

// ....
//..........
// toJSON use in class
class Person3 {
    constructor(name, age){
        
        this.name = name,
        this.age = age
    }
    
    toJSON() {
        return `my name is ${this.name} and me ${this.age} year old.`
    }
}

const obj3 = {
    data: new Person3('Aman', 26)
}

console.log(JSON.stringify(obj3)); // {"data":"my name is Aman and me 26 year old."}


// ....
//..........
// toJSON use in DOM Element
HTMLElement.prototype.toJSON = function() {
    // return `<${this.tagName.toLowerCase()}>`;
    return this.outerHTML;
}

const h1 = document.querySelector('h1');

const obj4 = {
    data: h1
}

console.log(JSON.stringify(obj4)); // {"data":"<h1 id=\"mainHead\">Home Page</h1>"}