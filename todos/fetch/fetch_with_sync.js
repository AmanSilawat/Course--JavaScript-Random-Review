console.log(1);
let user = fetch('https://api.github.com/users/amansilawat')
    .then((res) => res.json())
    .then((data) => console.log(data));
console.log(2);