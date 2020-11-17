function handleFiles() {
    let files = this.files;
    let preview = document.querySelector('.preview');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.startsWith('image/')) { continue }

        const img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;
        img.style.cssText = `width: 500px;`;
        preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

        const reader = new FileReader();
        console.log(reader);
        reader.onload = (function (aImg) { return function (e) { console.log(e); aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
    }
}


document.getElementById("imgPreview").addEventListener("change", handleFiles, false);