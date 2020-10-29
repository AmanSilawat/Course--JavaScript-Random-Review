// setTimeout with promise object
function wait(ms) {
    // create promise obj
    return new Promise(function(resolve, reject) {

        // error hanler section
        if(ms <= 0) {
            reject(new Error('Cannot wait 0 seconds or less than 0'));
            return;
        }

        // resove
        setTimeout(function() {
            resolve();
        }, ms);
    });
}

// pass milisecond in wait funtion
wait(0).then(function() {
    console.log('We have waiting 1 second!');
}).catch(function(error) {
    console.log(`There was an error: ${error.message}`);
});