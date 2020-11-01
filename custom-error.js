let age = 15;

function eligibleForVoting() {
    if(age < 18) {
        throw new Error('Person is under the age');
    }

    console.log(`${age } is eligigle for voting.`);
}

try {
    eligibleForVoting();
} catch(e) {
    console.log('Someting went wrong!');
    console.log(e);
}
