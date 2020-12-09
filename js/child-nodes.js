const myDiv = document.querySelector('#experiment');

// childNodes is a live live : node element
const myDivChildNodes = myDiv.childNodes;

// content all type of node (text, comment, span, text and more)
console.log(myDivChildNodes);


// content only element node
console.log( myDiv.children );