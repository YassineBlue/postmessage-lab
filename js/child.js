const log = document.getElementById('child-log');
const trustedOrigin = 'http://127.0.0.1'; 
let lastSenderSource = null;

// 1. Receiving from Parent & Sending Automatic Acknowledgment
window.addEventListener('message', (event) => {
    if (event.origin !== trustedOrigin) return;

    log.innerHTML += `<div>Received: "${event.data}"</div>`;
    
    // Save the source window context for future manual replies
    lastSenderSource = event.source; 

    // IMMEDIATELY SEND ACKNOWLEDGMENT BACK
    // event.source points directly back to index.html (the parent window context)
    event.source.postMessage(`[ACK] Received message: "${event.data}"`, event.origin);
});

// 2. Sending an Independent Manual Reply
function sendManualReply() {
    const input = document.getElementById('child-reply');
    
    if (lastSenderSource) {
        lastSenderSource.postMessage(input.value, trustedOrigin);
        log.innerHTML += `<div style="color: green;">Sent: "${input.value}"</div>`;
        input.value = '';
    } else {
                alert("No active communication link established yet! Parent must message first.");
            }
        }
