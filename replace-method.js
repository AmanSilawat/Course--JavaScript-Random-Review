const str = "Today 12 nov. next month 5";

console.log(str.replace('12', '20')); // Today 20 nov. next month 5
console.log(str.replace(/\d+/, '20')); // Today 20 nov. next month 5
console.log(str.replace(/\d+/g, '20')); // Today 20 nov. next month 20

// flip the number (using capture group)
console.log(str.replace(/(\d+)([^\d]+)(\d+)/g, '$3$2$1 $$')); // Today 5 nov. next month 12 $
//                         ^     ^      ^               ^
//                         $1    $2     $3              insert a '$'


console.log(str.replace(/(\d+)([^\d]+)(\d+)/g, function() {
    console.log(arguments);
    return 'is holiday';
})); // Today is holiday

/*
Arguments(6) [
    "12 nov. next month 5",         : Matched sub string
    "12",                           : First capturing group
    " nov. next month ",            : Second capturing group
    "5",                            : Third capturing group
    6,                              : index of the match
    "Today 12 nov. next month 5"    : entire string
]

*/



console.log(str.replace(/(\d+)([^\d]+)(\d+)/g, function(match, g1, g2, g3) {
    return parseInt(g1) + parseInt(g3);
})); // Today 17