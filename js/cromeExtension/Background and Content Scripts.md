To illustrate the use of background and content scripts in a Chrome extension for an eCommerce site, let's create a simple extension that helps users track prices of products. The extension will perform the following tasks:

1. **Content Script**: Injects a price tracker button into product pages.
2. **Background Script**: Manages user interactions and stores tracked product data.
3. **Popup**: Displays tracked products and their prices.

Here’s a step-by-step guide to building this extension:

### **1. Project Structure**

Create a folder for your extension and add the following files:

- `manifest.json`
- `background.js`
- `content.js`
- `popup.html`
- `popup.js`
- `styles.css`
- Icons (e.g., `icon.png`)

### **2. Define the `manifest.json`**

The `manifest.json` file configures the extension, specifying permissions, background scripts, content scripts, and the popup.

```json
{
  "manifest_version": 3,
  "name": "Price Tracker",
  "version": "1.0",
  "description": "Track product prices on eCommerce sites.",
  "permissions": [
    "storage",
    "activeTab"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://*.example.com/*"],  // Replace with actual eCommerce site patterns
      "js": ["content.js"]
    }
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "icons": {
    "16": "icon.png",
    "48": "icon.png",
    "128": "icon.png"
  }
}
```

### **3. Create `background.js`**

The background script manages data and communicates with the content script and popup. It listens for messages from the content script and stores the product data.

```javascript
// background.js

// Listens for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'trackPrice') {
    chrome.storage.local.get({ products: [] }, (result) => {
      const products = result.products;
      products.push(message.product);
      chrome.storage.local.set({ products: products });
    });
  }
});
```

### **4. Create `content.js`**

The content script injects a "Track Price" button into product pages and sends the product data to the background script when the button is clicked.

```javascript
// content.js

// Function to inject the Track Price button
function injectButton() {
  const button = document.createElement('button');
  button.textContent = 'Track Price';
  button.id = 'track-price-button';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '1000';

  document.body.appendChild(button);

  button.addEventListener('click', () => {
    const product = {
      title: document.querySelector('h1').textContent,  // Assuming product title is in <h1>
      price: document.querySelector('.price').textContent  // Assuming price has class 'price'
    };
    chrome.runtime.sendMessage({ action: 'trackPrice', product: product });
  });
}

// Inject the button when the page loads
window.addEventListener('load', injectButton);
```

### **5. Create `popup.html`**

The popup displays the list of tracked products.

```html
<!-- popup.html -->

<!DOCTYPE html>
<html>
<head>
  <title>Tracked Products</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Tracked Products</h1>
  <ul id="product-list"></ul>
  <script src="popup.js"></script>
</body>
</html>
```

### **6. Create `popup.js`**

The popup script retrieves the tracked products from storage and updates the popup with this data.

```javascript
// popup.js

// Function to display products in the popup
function displayProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.title}: ${product.price}`;
    productList.appendChild(listItem);
  });
}

// Retrieve products from storage and display them
chrome.storage.local.get({ products: [] }, (result) => {
  displayProducts(result.products);
});
```

### **7. Create `styles.css`**

Add some basic styles for the popup.

```css
/* styles.css */

body {
  font-family: Arial, sans-serif;
  width: 300px;
  margin: 0;
  padding: 10px;
}

h1 {
  font-size: 18px;
  margin-bottom: 10px;
}

#product-list {
  list-style-type: none;
  padding: 0;
}

#product-list li {
  margin-bottom: 5px;
}
```

### **8. Adding Icons**

Ensure you have an icon image (`icon.png`) in your project directory. This icon is displayed in the Chrome toolbar and extension management interface.

### **How It Works**

- **Content Script (`content.js`)**: Injects a "Track Price" button into eCommerce product pages. When clicked, the button sends the product’s title and price to the background script.
  
- **Background Script (`background.js`)**: Listens for messages from content scripts, stores the product data in Chrome’s local storage.

- **Popup (`popup.html` and `popup.js`)**: Displays a list of tracked products and their prices. Retrieves this data from storage when the popup is opened.

### **Summary**

This example demonstrates how background and content scripts work together in a Chrome extension:

- **Content Scripts**: Injected into web pages to interact with the DOM and send data to the background script.
- **Background Scripts**: Manage data, listen for messages, and perform tasks independent of any specific web page.
- **Popup**: Provides a user interface to display data managed by the background script.

This structure allows your extension to enhance the user experience on eCommerce sites by tracking product prices and providing a summary view through the popup.