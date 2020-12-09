// !custom styling of logs in console tab.
// 1. To add styles to logs, '%c' method expects
// 2. %c 'pattern text' after accept first argument is as a  styling
console.log(
    '%cWelcome to MyLab',
    `
    color: purple;
    font-size: 20px;
    font-weight: bold;
    `
);

console.log(
    '%c Welcome to %c MyLab ',
    `
    background-color: green;
    color: black;
    padding: 2px 0px;
    font-size: 20px;
    font-weight: bold;
    `,
    `
    background-color: purple;
    color: white;
    padding: 2px 0px;
    font-size: 20px;
    font-weight: bold;
    `
);

console.log(
    '%cPlay!',
    `
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 1px 1px 0px black,
                 1px -1px black,
                -1px  1px black,
                -1px -1px black;
    `
);
