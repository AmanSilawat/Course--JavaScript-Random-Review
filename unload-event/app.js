// get btn element
const btnRemove = document.getElementById('btnRemove');

// on click empty src in iframe
btnRemove.addEventListener('click', function () {
    const iframeChild = document.getElementById('iframeChild');
    iframeChild.src = '';
});