// ! not support for all browser
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
});

// detect color scheme
console.log( window.matchMedia('(prefers-color-scheme: light)').matches );

// const matchRes = window.matchMedia("(max-width: 767px)")
// console.log(matchRes);