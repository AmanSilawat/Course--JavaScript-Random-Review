function printHobbies(hob1, hob2) {
    console.log(hob1, hob2);
    console.log(this);
}

// bind object with calling time
printHobbies.call({
    name: 'Aman',
    country: "India"
}, 'Cricket', "Basket Ball");

// ---------------

// bind method
const user2 = printHobbies.bind({
    name: 'Sahil',
    country: "India"
}, 'Cricket', "Swiming");

//call the function
user2();