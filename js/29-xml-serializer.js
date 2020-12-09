const serializer1 = new XMLSerializer();

// complete element serialize into string
const doc = serializer1.serializeToString(document);
console.log(doc);


// specific element serialize into string
let heading = document.getElementById('heading');
const serializer2 = new XMLSerializer();
const docSpecific = serializer2.serializeToString(heading);

console.dir(docSpecific);