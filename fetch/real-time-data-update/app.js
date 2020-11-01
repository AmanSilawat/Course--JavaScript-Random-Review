function liveUpdate() {
    const domEle = document.getElementById('liveData');

    // ..
    setInterval(function() {
        fetch('http://localhost:3030/liveUpate')
        .then(function(res) {
            return res.json();
        }).then(function(data) {

            domEle.textContent = `${data.runningTime.toFixed(3)} ms`;
        }).catch(function(err) {
            console.error('Something went wrong');
            console.error(err);
        });
    }, 1000);
        
};

document.addEventListener('DOMContentLoaded', function() {
    liveUpdate();

})
