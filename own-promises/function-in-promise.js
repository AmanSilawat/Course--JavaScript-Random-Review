// normal function
function divideNormal(a, b) {
    return a / b;
}
divideNormal(10, 2);

// with Promise Object
function divide(a, b) {
    // create promise obj accept a function in two parameter
    return new Promise(function (resovle, reject) {
        if (b === 0) {
            // handle error: simple way
            // reject('You cannot divide by 0!');

            // handle error: diffrent way (error object with stack trace)
            reject(new Error('You cannot divide by 0!'));
            return;
        }
        resovle(a / b);
    });
}

// use then method on divide function
divide(10, 0).then(function (result) {
    console.log(`Divison Success: ${result}`);
}).catch(function (error) {
    console.log('Some error in your code block!');
    console.log(error);
});