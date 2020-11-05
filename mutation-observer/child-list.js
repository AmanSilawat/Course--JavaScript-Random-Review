// ! observe child node

 const myList = document.querySelector('.summary');

/*
    1. Making a new MutationObserver object
    2. Tell it what to observer
    3. what to do with the observed changes/mutation
*/

const observer = new MutationObserver(mutations => {
    // console.log(mutations);
    mutations.forEach((recored) => {
        console.log(recored);

        if (recored.addedNodes.length > 0) {
            console.log(`Number of node added: ${recored.addedNodes.length}`);
        }

        if (recored.removedNodes.length > 0) {
            console.log(`Number of node removed: ${recored.removedNodes.length}`);
        }
    })
});


observer.observe(myList, {
    childList: true
});

setTimeout(() => {
    myList.removeChild(myList.firstElementChild);

    const newLi = document.createElement('li');
    newLi.textContent = 'This is a new added list.';
    myList.appendChild(newLi);
}, 1000);