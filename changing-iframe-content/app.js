const iframe = document.getElementById('iframe');

function chnageContent() {

    // iframe html content assign in the variable (both are same) : one is a window instance and another document instance
    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframe.contentDocument;
    
    const iframeHeading = iframeDocument.querySelector('h1');
    
    // change the child content
    iframeHeading.style.color = "#14e9ea";
    iframeHeading.textContent = "Change iframe content through parent html";
    iframeDocument.body.style.backgroundColor = "purple";

    // ! Important: Only working on same origin (contentDocument, contentWindow)
}