# postMessage Lab 

A browser lab demonstrating window.postMessage() communication between a parent page and an iframe.
Designed to demonstrate cross-window communication using JavaScript in a clean and visual way

## Live Demo

https://yassineblue.github.io/postmessage-lab/

## Features

- Send messages from the parent page to the child iframe
- Automatic acknowledgment responses from the child iframe
- Manual replies from child iframe to parent page
- Secure cross-origin communication using `event.origin` and `window.location.origin`
- Real-time message logging
- Built using native browser APIs (no external frameworks)

## How it works

The parent page sends messages to the iframe using `window.postMessage()`.
The iframe listens for messages using `window.addEventListener("message")`, validates the origin, and replies back using the same API.

## Security

All messages are validated using `event.origin` and `window.location.origin` to ensure safe cross-origin communication.

## Files

- `index.html` → Parent page
- `child.html` → Child iframe window

## Running the Project

This project can be run locally using a server such as XAMPP, or directly through the GitHub Pages live demo above.

### Using XAMPP

1. Install and open XAMPP
2. Start the **Apache** server
3. Move the project folder into:

```txt
xampp/htdocs/postmessage-lab/
```

4. Open in your browser:

```txt
http://127.0.0.1/postmessage-lab/
```
