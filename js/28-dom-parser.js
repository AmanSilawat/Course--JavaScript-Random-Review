// create DOMParser constructor
const parser = new DOMParser();

// parseFromString this method accept only two arg.
const parsedDocument = parser.parseFromString(`
<!DOCTYPE>
<head>
    <title>Document</title>
</head>
<body>
    <h1>new DOMParser()</h1>
</body>
</html>
`, 'text/html');

// log detailed view
console.dir(parsedDocument);

// get element by DOMParser instance
console.log(parsedDocument.getElementsByTagName('h1'));

// chnage complete page
document.body = parsedDocument.body;