// create input element
let txtInput = document.createElement('input');
txtInput.setAttribute("type", "text")
txtInput.id = "txtInput";

// create button element
let btnCopy = document.createElement('button');
btnCopy.setAttribute("type", "button")
btnCopy.id = "btnCopy";
btnCopy.innerText = "Copy";

// append elements
document.body.appendChild(txtInput)
document.body.appendChild(btnCopy)

// Select and copy text on click this button
btnCopy.onclick = function() {
    // select the text
    txtInput.select();

    //copying the text
    document.execCommand("Copy");
}