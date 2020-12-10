let obj = {
    a: "apple",
    b: "boy",
}

obj = new Proxy(obj, {
    set(proxy, prop, reciver) {
        console.log(proxy); // { a: 'apple', b: 'boy' }
        console.log(prop); // a
        console.log(reciver); // Aman

        proxy.a = 50;
    }
});

console.log( obj.a = "Aman" ); // "Aman"
console.log( obj.a ); // 50