const objX = {
    x: 10,
    y: 20,
};

const objY = {
    x: 80,
    y: 90,
};

function printCoordinate() {
    console.log(this.x, this.y);
}

let rectX = printCoordinate.bind(objX); // only bind this time (not calling the function)
let rectY = printCoordinate.bind(objY);

// call the function
rectX();
rectY();
