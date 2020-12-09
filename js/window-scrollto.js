// same as window.scroll()
// supports smooth transition

// page scroll jump to y position (horizontally) 
// accept two type of parameter
// 1. x coord., x coord
// 2. options
window.scrollTo(0, 200);

window.scrollY; // 200

// 3 property in scrollTo method options
window.scrollTo({
    top: 200,
    left: 200,
    behavior: 'smooth'
});

// ! not support in safari on IOS and internet explorer