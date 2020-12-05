// Async class methods
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

let res = new Waiter().wait().then(console.log);
// The meaning is the same: it ensures that the returned value is a promise and enables await.