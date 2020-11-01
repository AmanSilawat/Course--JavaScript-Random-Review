// dom assign in variables
const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');

// add submit event
uploadForm.addEventListener('submit', function uploadFile(e) {
    e.preventDefault();

    const endpoint = 'http://localhost:3030/upload';
    const formData = new FormData();

    for (const file of inpFile.files) {
        formData.append('myFiles[]', file);
    }

    // fetch automatic set : Content-Type: multipart/form-data
    fetch(endpoint, {
        method: 'POST',
        body: formData
    }).catch(console.error);

});