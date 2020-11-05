// ! observe multiple node text change
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

        if (recored.addedNodes.length === 1
            && recored.addedNodes[0].nodeType === Node.TEXT_NODE
            && recored.removedNodes.length === 1
            && recored.removedNodes[0].nodeType === Node.TEXT_NODE
        ) {
            console.log(`Text change from '${recored.removedNodes[0].nodeValue}' to '${recored.addedNodes[0].nodeValue}`);
        }
    })
});


observer.observe(myList.firstElementChild, {
    childList: true
});

setTimeout(() => {
    myList.firstElementChild.textContent = 'change some text';
    myList.firstElementChild.innerHTML = 'inner html text added';
    myList.firstElementChild.innerHTML = '<br>inner html text added';
}, 1000);