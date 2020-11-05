// ! stop observation

const myList = document.querySelector('.summary');

/*
    1. Making a new MutationObserver object
    2. Tell it what to observer
    3. what to do with the observed changes/mutation
*/

const observer = new MutationObserver(mutations => {
    mutations.forEach(recored => {
        console.log(recored);
    })
});


observer.observe(myList, {
    subtree: true,
    attributes: true
});

// stop observing
observer.disconnect();

setTimeout(() => {
    myList.setAttribute('id', 'someRandomeId')
    myList.firstElementChild.setAttribute('id', 'anotherId')
}, 1000);