class ElementObserver {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    // will using only notifyObservers Method
    update(model) {
        this.element.innerHTML = model.number;
        this.element.style.backgroundColor = model.color;
    }
}
