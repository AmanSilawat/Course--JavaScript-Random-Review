
var myString = "[22].[44].[33].";
    
console.log(myString.match(/\d+/)); 
// [ '22', index: 1, input: '[22].[44].[33].' ]
console.log(myString.match(/\d+/g));
// [ '22', '44', '33' ]


console.log('---------');


var myString = "[22].[44].[33].", myRegexp = /\d+/g, result;

while (result = myRegexp.exec(myString)) {
    console.log(result, myRegexp.lastIndex);
}