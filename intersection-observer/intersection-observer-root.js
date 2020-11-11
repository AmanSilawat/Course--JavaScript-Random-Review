// IntersectionObserver work with custom root element

const myBox2 = document.getElementById('myBox2');
const container = document.getElementById('main');

const cb = function(entries) {
    console.log(entries[0]);
}

// , options
const observer = new IntersectionObserver(cb, {
    // 0.4 mean - element is after visible 40 % then occur
    threshold: [0.2, 0.5, 0.8],

    //set parent node element
    root: container
});

observer.observe(myBox2);