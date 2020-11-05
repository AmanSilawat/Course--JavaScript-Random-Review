const inpFile = document.getElementById('inpFile');
const previewContainer = document.getElementById('imgPreview');
const previewImage = previewContainer.querySelector('.image-preview__image');
const previewDeafultText = previewContainer.querySelector('.image-preview__default-text');

inpFile.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        // FilsReader obj reading file as a data url - asynchronously read the contents of files
        const reader = new FileReader();

        // state property value of FileReader object 

        // EMPTY	0	No data has been loaded yet.
        // LOADING	1	Data is currently being loaded.
        // DONE	    2	The entire read request has been completed.

        previewDeafultText.style.display = 'none';
        previewImage.style.display = 'block';

        // Fired when a read has completed successfully.
        // Also available via the onload property.
        reader.addEventListener('load', function () {
            previewImage.setAttribute('src', this.result);
        });

        // Starts reading the contents of the specified Blob,
        // once finished,
        // the result attribute contains a data: URL representing the file's data.
        reader.readAsDataURL(file);
    } else {
        previewDeafultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute('src', '');
    }
});