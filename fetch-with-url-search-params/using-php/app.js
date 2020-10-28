// ! PATTERN 1 ---------------------
// const data = "name=Aman&country=India";
// const usp = new URLSearchParams(data);

// const url = `search.php?${usp.toString()}`;
// console.log(url);

// fetch(url)
//     .then(res => res.text())
//     .then(console.log)


// ! PATTERN 2 ---------------------
const usp = new URLSearchParams({
    name: "Aman Silawat",
    country: "India"
});

fetch('search.php', {
    method: 'post',
    body: usp
})
    .then(res => res.text())
    .then(console.log);