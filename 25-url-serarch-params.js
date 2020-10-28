const formData = 'name=aman&county=India&gender=male'

// create a instance
const usp = new URLSearchParams(formData);

console.log( usp.getAll('name') ); // aman
console.log( usp.toString() ); // name=aman&county=India&gender=male

// loop the URLSearchParams instance 
for (const [key, val] of usp) {
    console.log(key, val);
}

// -----------------
// Add object in URLSearchParams

// create a instance
const objUsp = new URLSearchParams({
    name: 'Aman',
    country: 'India',
    knowledge: "Web Development"
});

// loop the URLSearchParams instance 
for (const [key, val] of objUsp) {
    console.log(`${key} : ${val}`);
}