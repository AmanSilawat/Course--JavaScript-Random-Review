function httpGet(url, callback) {
    const request = new XMLHttpRequest();

    request.open('get', url, true);
    request.onload = function () {
        callback(request);
    };
    request.send();
}

httpGet('xml-http-request/dom.json', function (req) {
    let tagData = JSON.parse(req.responseText);
    console.log(tagData[0].tagContent);
});
