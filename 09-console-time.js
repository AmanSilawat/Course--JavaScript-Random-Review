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

// Waste your precious
function spendSomeTime() {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
        total += i;
    }
}