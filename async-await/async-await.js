// perform unsynchronized operation

function getData(name) {
    return fetch(`async-await/data/${name}.json`).then(response => {
        // throw new Error('someting bad happen!');
        return response.json();
    });
}

getData('users').then(users => {
    console.log(users); // user json
});


// ------
// always return a promise
async function doSomething() {
    return 15;
}

doSomething().then((value) => {
    console.log(value); // 15
});


// ........


Promise.all([getData('users'), getData('settings')]).then(([users, settings]) => {
    console.log(users); // user json
    console.log(settings); // setting json
    console.log('I\'ve retrived both users and settings');
});


// handle error with try catch
async function getAllData() {
    try {
        const users = await getData('users'); // get user json
        const settings = await getData('settings'); // get setting json

        console.log(users);
        console.log(settings);
    } catch (e) {
        console.log(e);
        console.log("handled!");
    }
}

getAllData();


// handle error with try catch
async function getAllData2() {
    const users = await getData('users'); // get user json
    const settings = await getData('settings'); // get setting json

    console.log(users);
    console.log(settings);
}

getAllData2().catch(err => {
    console.log(e);
    console.log("handled!");
});