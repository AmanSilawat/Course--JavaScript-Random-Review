// ! not support enum type in js
// In reality Javascript does not support enumerated types,
// but what you can do is define a global constant object that looks and behaves like an Enum.

const Direction = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
};

function sayDirction(dirction) {
    switch (dirction) {
        case Direction.UP:
            console.log('We are going up!');
            break;
        case Direction.DOWN:
            console.log('We are going down!');
            break;
        case Direction.LEFT:
            console.log('We are going left!');
            break;
        case Direction.RIGHT:
            console.log('We are going right!');
            break;
        default:
            console.log('We are going left!');
    }
}

sayDirction(Direction.UP); // We are going up!
sayDirction(Direction.DOWN); // We are going down!
sayDirction(Direction.LEFT); // We are going left!
sayDirction(Direction.RIGHT); // We are going right!
