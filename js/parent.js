const chatBox = document.getElementById('chat-box');
const iframe = document.getElementById('child-iframe');
const trustedOrigin = 'http://127.0.0.1'; 

// 1. Sending to Child
function sendMessageToChild() {
    const input = document.getElementById('parent-input');
    const msg = input.value;
    
    // Target the iframe's content window
    iframe.contentWindow.postMessage(msg, trustedOrigin);
    
    chatBox.innerHTML += `<div><strong>You (Parent):</strong> ${msg}</div>`;
    input.value = '';
}

// 2. Receiving Ack/Replies from Child
window.addEventListener('message', (event) => {
    if (event.origin !== trustedOrigin) return; // Security filter

    chatBox.innerHTML += `<div style="color: blue;"><strong>Child Node:</strong> ${event.data}</div>`;
});
