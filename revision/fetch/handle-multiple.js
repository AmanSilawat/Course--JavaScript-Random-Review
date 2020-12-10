async function f() {
    let result = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/todos/2')
    ]);

    let resolve = result.map(async(promise)=> {
        return await promise.json();
    })

    console.log(resolve);
}

f();