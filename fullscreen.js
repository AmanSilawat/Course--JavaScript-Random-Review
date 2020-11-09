// fullscreen work only user interaction

function getFullscreenElement() {
    return document.fullscreenElement
    || document.webkitFullscreenElement // safari/opara
    || document.mozFullscreenElement //mozila
    || document.msFullscreenElement //internet expreler and edge
}

function toggleFullscreen() {
    if(getFullscreenElement()) {
        document.exitFullscreen()
    } else {
        
        // fullscreen working on the box
        let x = 10;
        document.getElementById('myBox').requestFullscreen().catch(console.log);
        
        // fullscreen working on full page
        // document.documentElement.requestFullscreen().catch(console.log);
        
    }
}

// WARNING: Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
document.addEventListener('dblclick', (e) => {
    toggleFullscreen();
});

// change full screen state
document.addEventListener('fullscreenchange', () => {
    console.log('full screen change');
})