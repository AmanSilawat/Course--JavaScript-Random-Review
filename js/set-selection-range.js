document.querySelector('#input').addEventListener('focus', function() {
    this.setSelectionRange(0, this.value.lastIndexOf('.'));
});