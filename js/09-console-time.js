// how many time consume some piece of code

// !this is old way

const start = new Date();
spendSomeTime();
const end = new Date();

console.log(end - start);

//....................

// !this is new way
console.time('timer1')
spendSomeTime();
console.timeEnd('timer1')

//...................

console.time('answer time');
spendSomeTime();
console.timeLog('answer time'); // answer time: 0.778076171875 ms
spendSomeTime();
console.timeEnd('answer time'); // answer time: 0.944091796875 ms

//...................

// Waste your precious
function spendSomeTime() {
    let total = 0;
    for (let i = 0; i < 10000; i++) {
        total += i;
    }
}