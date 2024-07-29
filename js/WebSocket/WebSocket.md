To implement real-time communication using WebSocket in an Express.js application, especially for a use case like stock market data streaming and chat functionality, follow these steps. We will use `ws`, a popular WebSocket library for Node.js, and `express` to set up the server.

### **1. Set Up Your Project**

1. **Initialize a new Node.js project**:
    ```bash
    mkdir stock-market-chat
    cd stock-market-chat
    npm init -y
    ```

2. **Install the necessary packages**:
    ```bash
    npm install express ws
    ```

### **2. Create the Server**

1. **Create a file named `server.js`**. This will be the entry point of your application.

    ```javascript
    // server.js

    const express = require('express');
    const WebSocket = require('ws');
    const http = require('http');

    const app = express();
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });

    app.use(express.static('public')); // Serve static files from the 'public' directory

    // WebSocket connection handling
    wss.on('connection', (ws) => {
        console.log('New client connected');

        // Handle incoming messages
        ws.on('message', (message) => {
            console.log('Received:', message);
            
            // Broadcast to all clients
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });

        // Handle client disconnection
        ws.on('close', () => {
            console.log('Client disconnected');
        });

        // Send a welcome message to the new client
        ws.send(JSON.stringify({ type: 'info', message: 'Welcome to the stock market chat!' }));
    });

    // Start the server
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
    ```

### **3. Create the Client**

1. **Create a directory named `public`**. Inside it, create two files: `index.html` and `app.js`.

2. **Create `index.html`**:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Stock Market Chat</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            #chat {
                width: 100%;
                height: 200px;
                overflow-y: scroll;
                border: 1px solid #ccc;
                padding: 10px;
            }
            #message {
                width: 80%;
                padding: 10px;
            }
            #send {
                width: 15%;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div id="chat"></div>
        <input id="message" type="text" placeholder="Type a message..."/>
        <button id="send">Send</button>

        <script src="app.js"></script>
    </body>
    </html>
    ```

3. **Create `app.js`**:

    ```javascript
    // app.js

    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');

    const ws = new WebSocket(`ws://${window.location.host}`);

    ws.onopen = () => {
        console.log('Connected to the WebSocket server');
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const message = document.createElement('div');
        message.textContent = `${data.type}: ${data.message}`;
        chat.appendChild(message);
        chat.scrollTop = chat.scrollHeight; // Scroll to the bottom
    };

    ws.onclose = () => {
        console.log('Disconnected from the WebSocket server');
    };

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            ws.send(JSON.stringify({ type: 'chat', message }));
            messageInput.value = '';
        }
    });

    // Optional: Handle Enter key to send messages
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
    ```

### **4. Run the Application**

1. **Start your server**:
    ```bash
    node server.js
    ```

2. **Open a browser** and navigate to `http://localhost:3000`. You should see the chat interface.

### **5. Implement Stock Market Streaming (Optional)**

To simulate stock market data streaming, you can use a simple interval to send random stock prices to all connected clients. Update `server.js` with the following code:

1. **Modify `server.js`** to include stock market data simulation:

    ```javascript
    // Simulate stock market data
    function sendStockData() {
        const stocks = ['AAPL', 'GOOGL', 'MSFT'];
        stocks.forEach((stock) => {
            const price = (Math.random() * 1000).toFixed(2);
            const message = JSON.stringify({ type: 'stock', stock, price });
            
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });
    }

    // Send stock data every 5 seconds
    setInterval(sendStockData, 5000);
    ```

2. **Update `app.js`** to handle stock market messages:

    ```javascript
    // app.js

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const message = document.createElement('div');

        if (data.type === 'chat') {
            message.textContent = `Chat: ${data.message}`;
        } else if (data.type === 'stock') {
            message.textContent = `Stock Update: ${data.stock} - $${data.price}`;
        } else if (data.type === 'info') {
            message.textContent = `Info: ${data.message}`;
        }

        chat.appendChild(message);
        chat.scrollTop = chat.scrollHeight; // Scroll to the bottom
    };
    ```

### **Summary**

- **Server (`server.js`)**: Sets up an Express server with WebSocket support. Handles incoming WebSocket connections and broadcasts messages.
- **Client (`index.html` and `app.js`)**: Provides a user interface for the chat and stock market data streaming. Connects to the WebSocket server and handles incoming messages.
- **Stock Market Streaming**: Simulates real-time stock price updates and broadcasts them to all connected clients.

By following these steps, you’ll have a real-time chat and stock market streaming application using WebSocket and Express.js.