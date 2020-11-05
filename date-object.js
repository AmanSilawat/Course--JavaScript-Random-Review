let d = new Date();
let timestamp = new Date(1254888); // pointing time(unix time) - 1st january 1970

// moz not recommended the mehod (different browser interpreter work differently)
// ISO8601 Formated Date/Time
var date = new Date("2018-01-01T11:20+10:00"); // +10:00 => GMT Offset

// recommended
// year, month, date, hourse, mintus, second
// month : 0-11
var date = new Date(2020, 0, 12, 2, 30, 20)

console.log(d);
console.log(timestamp.toString());
console.log(date);

// get specific value
console.log( date.getFullYear()); // 2020
console.log( date.getMonth()); // 0
console.log( date.getDate()); // 12
console.log( date.getHours()); // 2
console.log( date.getMinutes()); // 30
console.log( date.getSeconds()); // 20
console.log( date.getDay()); // week day 0

console.log( date.getUTCHours()); // 21

// get utc date
console.log( date.toISOString()); // 2020-01-11T21:00:20.000Z

// get regin or local date
console.log( date.toLocaleString('en-AU')); // 12/01/2020, 2:30:20 am
console.log( date.toLocaleString('en-US')); // 1/12/2020, 2:30:20 AM
console.log( date.toLocaleString('en-IN')); // 12/1/2020, 2:30:20 am


// get regin or local date (option)
console.log( date.toLocaleString('en-US'), {
    timeZone: 'America/Los_Angeles'
}); // 1/12/2020, 2:30:20 AM {timeZone: "America/Los_Angeles"}

// get regin or local date (option)
console.log( date.toLocaleString('en-IN'), {
    timeZone: 'India/kolkata'
}); // 12/1/2020, 2:30:20 am {timeZone: "India/kolkata"}


// convert to ISO8601 Formated Date/Time
console.log(JSON.stringify({
    myDate: date
})); // {"myDate":"2020-01-11T21:00:20.000Z"}