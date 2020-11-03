// ! Explain some line of code
const str_X = 'Some string';
const base64_X = btoa(str_X); // convert content to base64 encoded
const decode_X = atob(base64_X) // decode base64 content


// get elements
const btnUpload = document.getElementById('btnUpload');
const myCanvas = document.getElementById('myCavas');
const ctx = myCavas.getContext('2d');

// styling on canvas
ctx.fillStyle = '#ccc'
ctx.rect(0, 0, myCanvas.width, myCanvas.height);
ctx.fill()

ctx.fillStyle = 'blue';
ctx.font = '35px serif';
ctx.fillText('decode base64', 30, 60);

btnUpload.addEventListener('click', UploadCanvasImage);

// upload a canvas image
function UploadCanvasImage() {
    // DATA url contain base64 reprentation of canvas image
    const base64 = myCanvas.toDataURL().split(',')[1];

    const body = {
        'generated_at': new Date().toISOString(),
        'png': base64
    }

    fetch('upload.php', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}