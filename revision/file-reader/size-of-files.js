function updateSize() {
    let nBytes = 0,
        oFiles = this.files,
        nFiles = oFiles.length;

    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
        nBytes += oFiles[nFileId].size;
    }

    let sOutput = nBytes + " bytes";

    // optional code for multiples approximation
    const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

    for (index = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, index++) {
        sOutput = nApprox.toFixed(3) + " " + aMultiples[index] + " (" + nBytes + " bytes)";
    }
    console.log(nApprox, '---Out-side');

    // end of optional code
    console.log('Number of files', nFiles);
    console.log('Size', sOutput);
}

document.getElementById("input").addEventListener("change", updateSize, false);