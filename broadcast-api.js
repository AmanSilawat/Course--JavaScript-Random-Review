// The Broadcast Channel API allows basic communication between browsing contexts
// (that is, windows, tabs, frames, or iframes) and workers on the same origin.


// Creating or joining a channel
const bc = new BroadcastChannel('xyz');

// Handle incoming messages
bc.addEventListener('message', e => {
    console.log(e);
});

//Send message
bc.postMessage('Hello, how are u.')
bc.postMessage([40, 50, 60, 70])
bc.postMessage({name: 'asdf', age: 22})
bc.postMessage(new Blob(['sample text'], {
    type: 'text/plain'
}));


// Disconnect the channel
// bc.close();