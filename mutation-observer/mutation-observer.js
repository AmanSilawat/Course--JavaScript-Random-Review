// ! observer attributes, attribut old value and fillter the attribute in this code

const myList = document.querySelector('.summary');

/*
    1. Making a new MutationObserver object
    2. Tell it what to observer
    3. what to do with the observed changes/mutation
*/

// MutationObserver appcept a callback funtion
const observer = new MutationObserver(mutations => {
    // console.log(mutations);

    // loop throuth each mutation
    mutations.forEach((recored) => {
        console.log(recored);

        if (recored.type === 'attributes') {
            const changedAttrName = recored.attributeName;
            const newValue = recored.target.getAttribute(changedAttrName);

            console.log(`attribute change ${changedAttrName} : ${newValue}`);
        }
    })
});

// Configures the MutationObserver to begin receiving notifications through its callback function when DOM changes matching the given options occur.
observer.observe(myList, {
    attributes: true,
    attributeFilter: ['class'],
    attributeOldValue: true
});

// change the DOM
setTimeout(() => {
    myList.setAttribute('id', 'someRandomId');
    myList.setAttribute('class', 'newSummary  newClass');
}, 1000);