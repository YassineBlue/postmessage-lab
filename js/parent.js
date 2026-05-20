const chatBox = document.getElementById('chat-box');
const iframe = document.getElementById('child-iframe');
// const trustedOrigin = 'http://127.0.0.1'; // use this one for local hosting 
const trustedOrigin = window.location.origin;
// 1. Sending to Child
function sendMessageToChild() {
    const input = document.getElementById('parent-input');
    const msg = input.value;
    
    //avoiding empty inputs
    if (!msg.trim()) return;
    // Target the iframe's content window
    iframe.contentWindow.postMessage(msg, trustedOrigin);

    const div = document.createElement('div');
    const str = document.createElement('strong');
    str.textContent = 'You (Parent): ';
    const text = document.createTextNode(msg); 
    str.appendChild(text);
    div.appendChild(str);
    chatBox.appendChild(div);
    input.value = '';
}

// 2. Receiving Ack/Replies from Child
window.addEventListener('message', (event) => {
    if (event.origin !== trustedOrigin) return; // Security filter

    const div = document.createElement('div');
    div.style.color = 'blue';
    const str = document.createElement('strong');
    str.textContent = 'From child: ';
    const txt = document.createTextNode(event.data); 
    div.appendChild(str);
    div.appendChild(txt);
    chatBox.appendChild(div);
});
