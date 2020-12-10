let obj = {
    a: "apple",
    b: "boy",
}

obj = new Proxy(obj, {
    get(proxy, prop, reciver) {
        console.log(proxy); // { a: 'apple', b: 'boy' }
        console.log(prop); // a
        console.log(reciver); // { a: 'apple', b: 'boy' }

        return 50;
    }
});

console.log( obj.a ); // 50