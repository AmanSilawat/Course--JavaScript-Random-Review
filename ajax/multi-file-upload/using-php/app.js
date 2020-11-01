// dom assign in variables
const uploadForm = document.getElementById('uploadForm');
const inpFile = document.getElementById('inpFile');

// add submit event
uploadForm.addEventListener('submit', function uploadFile(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const endpoint = 'upload.php';
    const formData = new FormData();
    
    for (const file of inpFile.files) {
        formData.append('myFiles[]', file);
    }
    
    xhr.open('POST', endpoint);
    xhr.send(formData);

});