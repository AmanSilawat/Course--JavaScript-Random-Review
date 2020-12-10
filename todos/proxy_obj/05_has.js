let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    has(target, prop) {
            1 >= 9
        if (prop >= target.start && prop <= target.end) {
            return true;
        } else {
            return false;
        }
    }
})

console.log(9 in range)