const timerText = document.createElement('h2');
timerText.innerHTML = '0';

const btnStart = document.createElement('button');
btnStart.innerHTML = 'Start Timer';
btnStart.value = 'Start Timer';

const btnPause = document.createElement('button');
btnPause.innerHTML = 'Pause Timer';
btnPause.value = 'Pause Timer';

document.body.appendChild(timerText);
document.body.appendChild(btnStart);
document.body.appendChild(btnPause);

let intervalId;
let count = 0;

btnStart.addEventListener('click', function () {
    intervalId = setInterval(function () {
        count++;
        timerText.textContent = count;
    }, 1000);
});

btnPause.addEventListener('click', function () {
    clearInterval(intervalId);
});
