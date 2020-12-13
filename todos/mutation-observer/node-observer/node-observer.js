var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('ol');

var observer = new MutationObserver(function (mutations) {
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
});

observer.observe(list, {
    attributes: true,
    childList: true,
    characterData: true
});

if (document.getElementById('hello')) {
    document.getElementById('hello').innerHTML = 'Hello World - this was inserted using JavaScript';
}
