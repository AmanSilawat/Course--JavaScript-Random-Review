// ! Observe on parent and all child node node

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

setTimeout(() => {
    myList.setAttribute('id', 'someRandomeId')
    myList.firstElementChild.setAttribute('id', 'anotherId')
    myList.lastElementChild.setAttribute('id', 'lastEleId')
}, 1000);