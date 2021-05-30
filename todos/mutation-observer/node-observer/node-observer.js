var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('ol');

var observer = new MutationObserver(callback);

function call(mutations) {
    console.log(mutations);
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            var list_values = Array.from(list.children)
                .map((node) => node.innerHTML)
                .filter(function (s) {
                    if (s === '<br>') {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            console.log(list_values);
        }
    });
}

observer.observe(list, {
    attributes: true,
    childList: true,
    characterData: true
});

// let mutations = observer.takeRecords();
// observer.disconnect();

if (mutations) {
  callback(mutations);
}