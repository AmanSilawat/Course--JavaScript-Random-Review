// Promise chaning
function loadJson(url) {
    return fetch(url)
        .then((res) => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .then((result) => {
            console.log(result);
        });
}

loadJson('https://jsonplaceholder.typicode.com/todos/1').catch(console.log);



// Rewriting with async await
// Promise chaning
async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let result = await response.json();
        console.log(result);
    } else {
        throw new Error(res.status);
    }
}

loadJson('https://jsonplaceholder.typicode.com/todos/1').catch(console.log);