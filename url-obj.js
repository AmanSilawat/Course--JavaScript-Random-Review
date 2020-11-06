const url = new URL('https://google.com');

url.hostname = 'youtube.com'; // other all property change with this change

// added form url in search property
url.search = '?name=user1&age=10';

// added data in the search params
url.searchParams.set('name', 'user2')
url.searchParams.set('age', 20);

// extract the search params all the query string params from the current page
const myUrl = new URL(window.location.href)
console.log(myUrl);

// ----------
// url object use in fetch
const url2 = new URL('http://127.0.0.1:5500/url-obj.js');

fetch(url2).then(function (res) {
    return res.text();
}).then(function (text) {
    console.log(text);
});