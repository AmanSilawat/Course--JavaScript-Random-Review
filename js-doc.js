// install jsdoc in system open the terminal
// 1. and type: sudo npm i -g  jsdoc
// 2. restart your vscode
// 3. again type: jsdoc js-doc.js
// 4. in browser: http://127.0.0.1:5500/out/

/**
 * This fun. accept person details and return a object
 * @param {String} name The person's full name
 * @param {Number} age the person's age
 * @param {Boolean} isDeveloper Wheather or not the person is a developer
 * @returns {Object} The person object
 */
function createPerson(name, age, isDeveloper) {
    return { 
        name: name,
        age: age,
        isDeveloper: isDeveloper
    }
}

// type createPerson() -> and show function description
createPerson()



class Person {
    /**
     * Create a person
     * 
     * @param {String} name The person's full name
     * @param {Number} age the person's age
     * @param {Boolean} isDeveloper Wheather or not the person is a developer
     */
    constructor(name, age, isDeveloper) {
        this.name = name,
        this.age = age,
        this.isDeveloper = isDeveloper 
    }
}

/**
 * Outputs details about a person.
 * 
 * @param {Person} person 
 */
function printDetails(person) {
    console.log(person.name);
}

/**
 * Gives you numbers.
 * 
 * @returns {number[]}
 */
function getNumbers() {
    return [5, 55, 77, 33, 1];
}

const numbers = getNumbers();
