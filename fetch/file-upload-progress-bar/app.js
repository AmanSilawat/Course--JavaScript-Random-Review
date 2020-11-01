// dom assign in variables
const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');

// add submit event
uploadForm.addEventListener('submit', function uploadFile(e) {
    e.preventDefault();

    const endpoint = 'upload.php';
    const formData = new FormData();

    formData.append('inpFile', inpFile.files[0]);

    // fetch automatic set : Content-Type: multipart/form-data
    fetch(endpoint, {
        method: 'POST',
        body: formData
    }).catch(console.error);

});