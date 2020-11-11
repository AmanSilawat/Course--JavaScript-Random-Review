// // (not a dinamic imporing) ------
// // math.js is LOADED on Page Load

import * as math from './src/math.js';
document.getElementById('btn').addEventListener('click', () => {
    alert(math.multiply(10, 5));
});

//..
// ....
// (dinamic imporing) ------
// not require type="module" in script tag
// math.js is not LOADED on Page Load
// import() method is a premise
// 
// document.getElementById('btn').addEventListener('click', () => {
//     import('./src/math.js').then(math => {
//         console.log(math);
//         alert(math.multiply(10, 5));
//     });
// });

// ..
// ....
// use 'export default' in math.js
//  
// document.getElementById('btn').addEventListener('click', () => {
//     import('./src/math.js').then(math => {
//         console.log(math); // Module {Symbol(Symbol.toStringTag): "Module"}
//         alert(math.default(10, 5));
//     }).catch(console.log);
// });

//..
// ....
// use 'export default' in math.js
//  dynamic loading with ayns await
//  
// document.getElementById('btn').addEventListener('click', async () => {
//     const moudlePath = false ? './src/abc/math.js' : './src/math.js';
//     let math = await import(moudlePath);
//     alert(math.default(10, 5));
//     console.log(math.default(10, 5));  // 50
// });