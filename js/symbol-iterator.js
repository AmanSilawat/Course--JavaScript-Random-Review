const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator]()

for (const n of numbers) {
    n; // log the n
}
// output: 
// 1
// 2
// 3

numbersIterator.next(); // {value: 1, done: false}
numbersIterator.next(); // {value: 2, done: false}
numbersIterator.next(); // {value: 3, done: false}
numbersIterator.next(); // {value: undefined, done: true}


// iterator this is a function ?
numbers[Symbol.iterator]; // values() { [native code] }



// Look like iterator
function squaredCustom() {
    let n = 0;

    return {
        next() {
            n++;

            if (n <= 5) {
                return {
                    value: n * n,
                    done: false
                }
            }

            return {
                value: undefined,
                done: true
            }
        }
    }
}
const squareItereter = squaredCustom();
squareItereter.next(); // {value: 1, done: false}
squareItereter.next(); // {value: 4, done: false}
squareItereter.next(); // {value: 9, done: false}
squareItereter.next(); // {value: 16, done: false}
squareItereter.next(); // {value: 25, done: false}
squareItereter.next(); // {value: undefined, done: true}




// custom iterator function
function squared(max) {
    return {
        [Symbol.iterator]() {

            let n = 0;

            return {
                next() {
                    n++;

                    if (n <= max) {
                        return {
                            value: n * n,
                            done: false
                        }
                    }

                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for (const n of squared(10)) {
    n; // log the n
}

// output: 
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81



// array Destructrugin
const [x, y, z] = [4, 5, 6];
// output:
// 10 
// 11
// 12

// array Destructrugin
const [a, b, c] = squared(10);
// output:
// 1
// 4
// 9



///...
// Not Recomended
class NumberList{
    constructor() {
        this.numbers = [1, 2, 3, 4];
    }

    [Symbol.iterator]() {
        const numbers = this.numbers;
        let currIndex = -1;

        return {
            next() {
                return {
                    value: numbers[++currIndex],
                     done: currIndex >= numbers.length
                }
            }
        }
    }
}
const numListIterator = new NumberList()[Symbol.iterator]();

numListIterator.next(); // {value: 1, done: false}
numListIterator.next(); // {value: 2, done: false}
numListIterator.next(); // {value: 3, done: false}
numListIterator.next(); // {value: 4, done: false}
numListIterator.next(); // {value: undefined, done: true}


// Not Recomended
const numList = new NumberList();
for( const val of numList) {
    console.log(val);
}
// output
// 1
// 2
// 3
// 4