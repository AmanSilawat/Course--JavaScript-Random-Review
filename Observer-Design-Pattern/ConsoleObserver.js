class ConsoleObserver {
    constructor() {
        //..
    }

    // will using only notifyObservers Method
    update(model) {
        console.log(
            'The number is ',
            +model.number + ' and the color is ' + model.color.toUpperCase()
        );
    }
}
