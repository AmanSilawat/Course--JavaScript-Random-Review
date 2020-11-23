// simpler handler with no properties :

const target1 = {
    message1: "hello",
    message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target1, handler1);

proxy1; // Proxy {message1: "hello", message2: "everyone"}

//! Hold three hidden property
// Proxy {prop1: "val1", prop2: "val2"}
//     [[Handler]]: Object
//     [[Target]]: Object
//     [[IsRevoked]]: false

proxy1.message1; // hello
proxy1.message2; // everyone


// ..
// ....
// To customise the proxy

const target2 = {
    message1: "hello",
    message2: "everyone"
};

const ex2handler2 = {
    get: function (targetObj, prop, receiver) {
        console.log( 'targetObj', targetObj ); // target obj.
        console.log( 'prop', prop ); // what's property get
        console.log( 'receiver', receiver ); // 
        console.log( '--' );
        return "world";
    }
};

const proxy2 = new Proxy(target2, ex2handler2);

console.log(proxy2); // Proxy {message1: "hello", message2: "everyone"}
proxy2.message1; // world
proxy2.message2; // world


console.log('-------\n-------\n-------');


// ..
// ....
// With the help of the Reflect
const target3 = {
    message1: "hello",
    message2: "everyone"
};

const handler3 = {
    get: function (target3, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }
        console.log(...arguments);
        return Reflect.get(...arguments);
    },
};

const proxy3 = new Proxy(target3, handler3);

proxy3; // Proxy {message1: "hello", message2: "everyone"}
proxy3.message1; // hello
proxy3.message2; // world