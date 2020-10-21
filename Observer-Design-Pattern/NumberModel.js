class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observer = [];
    }

    increment() {
        const colors = ['orange', 'red', 'gree', 'blue'];

        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.notifyObservers();
    }

    // add first time default observation
    addObserver(o) {
        this.observer.push(o);
    }

    // Checking this.observation default and every time click on increament button
    notifyObservers() {
        for (let o of this.observer) {
            o.update(this);
        }
    }
}
