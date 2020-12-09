// Label code block then break out of nested loops
outer:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i == 2 && j == 1) {
            break outer;
        }
        console.log(i, j);
    }
}