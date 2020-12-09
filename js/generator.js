// Genretor use with variable
function* square(max) {
    let n = 0;

    while (n < max) {
        n++;
        yield n * n;
    }
}

for (const n of square(10)) {
    console.log(n);
}

// output
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// 100

// Genretor use with array
function* randomName(array) {
    const available = array;

    while(available.length !== 0) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const value = available[randomIndex];

        // Remove the used value from the list of availbable vales
        available.splice(randomIndex, 1);

        yield value;
    }
}

const names = ['user1', 'user2', 'user3', 'user4'] ;
const uniqueNames = randomName(names);

for (const name of uniqueNames) {
    console.log(name);
}

// output: EACH TIME RANDOM OUTPUT
// user1
// user3
// user4
// user2