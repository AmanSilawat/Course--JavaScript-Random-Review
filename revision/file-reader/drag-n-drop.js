let dropbox;

dropbox = document.getElementById("dropbox");
input = document.getElementById("dragInput");

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    const dataTransfer = e.dataTransfer;
    const files = dataTransfer.files;

    handleFiles(files);
}

function handleFiles(files) {
    input.files = files;
}

dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);