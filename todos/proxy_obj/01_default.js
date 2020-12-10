let obj = {
    a: "apple",
    b: "boy",
}

obj = new Proxy(obj, {});

console.log(obj);