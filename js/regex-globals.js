// RegExp.exec()
// String.matchAll()


const testStr = 'Hi. I have 5 cats and I have 2 dogs.'
const re = /I have (\d+) (\w+)/g;

let regexRes;

console.log('Initial last Index ' + re.lastIndex); // Initial last Index 0

while ( (regexRes = re.exec(testStr)) != null ) {
    console.log(regexRes);
    console.log('Last Index ' + re.lastIndex);
    // first  time log output: Last Index 17
    // second time log output: Last Index 35

}

// matchAll method is iterator
const matches = testStr.matchAll(re);
console.log(matches); // RegExpStringIterator {}

for( const match of matches) {
    console.log(match);
}


// ! matchAll is a Iterator 
const matchesIterator = testStr.matchAll(re);

const [firstMatch, secondMatch] = matchesIterator;
console.log(firstMatch); // array
console.log(secondMatch); // array

const [firstMatchAgain, secondMatchAgain] = matchesIterator;
console.log(firstMatchAgain); // undefined
console.log(secondMatchAgain); // undefined