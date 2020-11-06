// --------------------
// toString with Object
console.log( {}.toString() ); // [object, Object]
console.log( Object.prototype.toString.call([]) ); // [object, Array]

// -------------------
// toString with array
let arr = [2, 3, 4];
console.log( arr.toString() ); // 2, 3, 4
console.log( "coercion/type convertion : " + arr);
// coercion/type convertion : 2,3,4

// -----------------------------
// toString with URLSearchParams
let params = new URLSearchParams( [['name', 'user1'], ['age', 23]] );
console.log( "coercion/type convertion : " + params);
// coercion/type convertion : name=user1&age=23

// toString with class
class NewCls {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
var myNewCls = new NewCls(2, "str");;
console.log( "coercion/type convertion : " + myNewCls);
// coercion/type convertion : [object, Object]

// -------------------------------------------------
// toString with class and overwrite toString method
class overwriteToStr {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    toString() {
        return ` : ${this.a}, ${this.b}`;
    }
}
var ots = new overwriteToStr(2, "str");;
console.log( "Overwrtie toString method" + ots);
//  : Overwrtie toString method: 2, str

// ---------------------------
// toString with extends class 
class childCls extends overwriteToStr {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}
var extendsCls = new childCls(7, 8, 9);
console.log( "Overwrtie toString method" + extendsCls);
// Overwrtie toString method: 7, 8

// ----------------------------------------------
// toString with extends class overwrite toString
class childCls2 extends overwriteToStr {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    toString() {
        return ` : ${this.a}, ${this.b}, ${this.c}`;
        // return ` : ${super.toString()}, ${this.c}`; // same output
    }
}
var extendsCls2 = new childCls2(10, 11, 12);

// ----------------------------
// Both console are same output
console.log( "Overwrtie toString method" + extendsCls2);
// Overwrtie toString method: 10, 11, 12

console.log("Overwrtie toString method" + childCls2.prototype.toString.call(extendsCls2));
// Overwrtie toString method: 10, 11, 12
