// // ! PATTERN 1 --------------------- (FETCH GET METHOD)
// default the Fetch API uses the GET method
const data = "name=Aman&country=India";
const usp = new URLSearchParams(data);

const url = `http://localhost:3030/message?${usp.toString()}`;
console.log(url);

fetch(url)
    .then(res => res.text())
    .then(console.log)


// ! PATTERN 2 --------------------- (FETCH POST METHOD)
// const usp = new URLSearchParams({
//     name: "Aman Silawat",
//     country: "India"
// });

// fetch('http://localhost:3030/message', {
//     method: 'post',
//     body: usp,
//     mode: 'cors'
// })
//     .then(res => res.text())
//     .then(console.log);