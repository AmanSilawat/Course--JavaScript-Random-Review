// ! observe single node text change

const myList = document.querySelector('.summary');

/*
    1. Making a new MutationObserver object
    2. Tell it what to observer
    3. what to do with the observed changes/mutation
*/

const observer = new MutationObserver(mutations => {
    mutations.forEach(recored => {
        console.log(recored);

        console.log('new text is : ' + recored.target.nodeValue + ',  old value is: ' + recored.target.characterDataOldValue);
    })
});


observer.observe(myList.firstElementChild.childNodes[0], {
    characterData: true,
    characterDataOldValue: true
});

setTimeout(() => {
    myList.firstElementChild.firstChild.nodeValue = 'I am add added some new text in myList';
}, 1000);