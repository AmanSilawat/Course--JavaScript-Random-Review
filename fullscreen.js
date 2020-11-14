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


// ! fullscreen API not work page loaded (only work user gesture)
// let btn = document.createElement('button');
// btn.textContent = 'click';
// document.body.appendChild(btn);

// // WARNING: Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
// btn.addEventListener('click', (e) => {
//     console.log('click event');
//     toggleFullscreen();
// });

// // change full screen state
// document.addEventListener('fullscreenchange', () => {
//     console.log('full screen change');
// });

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOMContentLoaded event');
//     btn.click();
// });