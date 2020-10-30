const user = {
    name: 'Aman Silawat',
    age: 26,
    occupation: 'Web Developer'
};

const jsonStr = JSON.stringify(user);
const xhr = new XMLHttpRequest();

xhr.open('post', 'myPhp.php');

// SET HEADER type is json
xhr.setRequestHeader('Conent-Type', 'application/json');
xhr.send(jsonStr);

// how to check output
// 1. run on xampp server
// 2. open network tab -> XHR -> myPhp.php -> Preview -> this is your output
//    or
// 3. open network tab -> headers -> Request Payload -> this is your output