// this function return a resolved provese with return 1
// async always returns a promise.
async function f() {
    return 1;
}

f().then((res) => {
    console.log(res); // 1
});


// 
async function f4() {
    return Promise.resolve(1);
}

f4().then(console.log); //1



// promise that resolves in 1 second:
async function f4() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

f4();

// goto: https://javascript.info/async-await#await
// async function showAvatar() {

//     // read our JSON
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();

//     // read github user
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();

//     // show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // wait 3 seconds
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
// }

// showAvatar();






// working with anonymous async function
(async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let user = await response.json();
    console.log(user);
})();



// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();