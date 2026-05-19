# postMessage Lab Chat

A simple browser lab that demonstrates how `window.postMessage()` works between a parent page and an iframe.

The project is designed for learning cross-window communication in JavaScript in a clean and visual way.

## Features

- Send messages from the parent window to the iframe
- Automatic acknowledgment replies from the child window
- Manual replies from child to parent
- Origin validation using `event.origin`
- Real-time message logging

## Files

- `index.html` → Parent window
- `child.html` → Child iframe window

## Running the Project

This project should be run through a local server because it uses origin validation.

### Using XAMPP

1. Install and open XAMPP
2. Start the **Apache** server
3. Move the project folder into:

```txt
xampp/htdocs/postmessage-lab/
```

4. Open the tab in your browser:

```txt
http://127.0.0.1/postmessage-lab/
```
