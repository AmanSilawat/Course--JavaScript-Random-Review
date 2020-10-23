window.addEventListener('hashchange', function() {
    console.log( window.location.hash.substring(1) );
});

// how to check this code 
// 1. first open this page in the browser and past the url 'http://127.0.0.1:5500/#mainHead'
// 2. chnage the url 'http://127.0.0.1:5500/#subHead'
// 3. check the consoel: sub head