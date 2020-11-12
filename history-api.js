window.addEventListener('popstate', function(e) {
    console.log(e);
});

throw new Error("Stop Code Execution");


/*
The History interface allows manipulation of the browser session history
history api contains some properties

properties 
    length: 2
    scrollRestoration: "auto"
    state: null
    __proto__
        functions: back(), forward(), go(), pushState(), replaceState()

*/

//get current length of page history
history.length;

// go backward
history.back();

// go forward
history.forward();

// Positive value mean: go forward
history.go(1);

// Positive value mean: go backward
history.go(-2);

// ZERO mean : refresh current page
history.go(0);


// ! manipulate the history with pushState()
// ! pushState() and replaceState work only same origin
// about is added to url but page not refreshed
history.pushState(null, null, 'about');


                                                        // ----------|
// Navigates throuht the history then trigger popstate event      // |
window.addEventListener('popstate', function(e) {                 // |
    console.log(e);                                               // |
});                                                               // |
                                                                  // |                                                               // |
history.pushState(50, null, 'about');                             // |
history.pushState(100, null, 'contact');                          // |
                                                        // ----------|

// set arbitrary data in first argument of pushState() and help your application run
// about page statue set to 50
// contact page statue set to 100


// replace contact state 100 to 2
// only replace not added to history API
history.replaceState(2, null, 'contact');