const myBox = document.getElementById('myBox');

const cb = function(entries) {
    console.log(entries[0]);
}

// , options
const observer = new IntersectionObserver(cb, {
    // 0.4 mean - element is after visible 40 % then occur
    threshold: 0.4,

    // add multiple thress hold
    // threshold: [0.2, 0.5, 0.8],

    // Observe 50px before (accept negative value )
    // rootMargin: "50px",
});

observer.observe(myBox);

// remove watching myBox
observer.disconnect(myBox);