async function checkHeader() {
    let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    console.log(response)

    let headerInfo = response.headers.get('Content-Type');
    console.log(headerInfo)
}
checkHeader();