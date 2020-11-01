// dom assign in variables
const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');
const progressBarFill = document.querySelector('#progress-bar > .progress-bar-fill')
const progressBarTxt = progressBarFill.querySelector('.progress-bar-text');

// add submit event
uploadForm.addEventListener('submit', function uploadFile(e) {
    e.preventDefault();

    // create xhr
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'upload.php');

    // run inside of the code during the upload process 
    xhr.upload.addEventListener('progress', function (e) {
        const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;

        progressBarFill.style.width = percent.toFixed(2) + '%';
        progressBarTxt.textContent = percent.toFixed(2) + '%';
    });

    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(new FormData(uploadForm))
});