 const main = document.getElementById('main');

 const p1 = main.getElementsByTagName('p')[0];
 const p2 = main.getElementsByTagName('p')[1];

// Woring with
// check equal tagName, tagAttributes, nodeValue, all nested node element and textNode( read: spaces, enters )
 console.log(p1.isEqualNode(p2));

