// get json data
fetch('https://jsonplaceholder.typicode.com/todos/').then(function(res) {
    return res.json();
}).then(function(obj) {
    console.log(obj);
}).catch(function(err) {
    console.error('Something went worng');
    console.error(err);
});