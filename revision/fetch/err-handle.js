// 1. --
// async function f() {
//     await Promise.reject(new Error("Whoops!"));
// }


// 2. --
// …is the same as this:
async function f2() {
    throw new Error("Whoops Again!");
}


// 3. --
async function f3() {

    try {
        let response = await fetch('http://no-such-url');
    } catch (err) {
        alert(err); // TypeError: failed to fetch
    }
}
// f3();


// 4. --
// We can append .catch to handle it:
async function f() {
    let response = await fetch('http://no-such-url');
}


// 5. --
// f() becomes a rejected promise
f().catch(console.log); // TypeError: failed to fetch // (*