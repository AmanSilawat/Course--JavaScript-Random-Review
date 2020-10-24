// create a XMLHttpRequest Object
const xhr = new XMLHttpRequest();

console.log(xhr.readyState); // 0
//! four stage of readyState
// 0 - unsend
// 1 - open
// 2 - header recive
// 3 - loading
// 4 - done

// onreadystatechnage state handler
xhr.onreadystatechange = function () {

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            let resData = JSON.parse(xhr.responseText)

            // Create a dom element
            para = document.createElement(resData[0].tagName);
            para.id = resData[0].tagId;
            para.textContent = resData[0].tagContent;

            // append element
            document.body.appendChild(para);
        }

        if (xhr.status == 404) {
            console.log('File or resource not found');
        }
    }
};

xhr.open('get', 'http://127.0.0.1:5500/xml-http-request/dom.json', true); // xhr.open accept three argument
// 1st - send type method (get, post)
// 2nd - url
// 3rd - true (accept async), false (not accept async)

// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
xhr.send();
