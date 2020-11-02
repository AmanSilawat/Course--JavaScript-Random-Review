// get element
h1 = document.getElementById('mainHead');

// getComputedStyle method is a LIVE method
h1Css = window.getComputedStyle(h1);
h1AfterCss = window.getComputedStyle(h1, "::after");

console.log(h1AfterCss.fontSize); // 15px

// LIVE method example
console.log(h1Css.color); // rgb(238, 238, 238)
h1.style.color = 'white';
console.log(h1Css.color); // rgb(255, 255, 255)