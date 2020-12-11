async function wait() {
    new Promise(resolve => setTimeout(resolve, 1000));
    console.log(50);

    return 10;
}

function f() {
    // shows 10 after 1 second
    console.log(1);
    wait().then(result => console.log(result));
    console.log(2);
}

console.log('hello 1')
f();
console.log('hello 2')

/* 
output flow
1: hello 1
2: 1
3: 50
4: 2
5: hello 2
6: 10

*/