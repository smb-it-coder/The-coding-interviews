Content scripts and background scripts serve different purposes within a Chrome extension and operate in distinct environments. Here’s a detailed comparison of the two, along with a live example to illustrate their differences:

### **Differences Between Content Scripts and Background Scripts**

#### **Content Scripts**

1. **Environment**: 
   - **Context**: Run in the context of web pages. They are injected into specific web pages defined by the `manifest.json` file.
   - **Access**: Have access to the DOM of the page they are injected into and can modify the content of that page.
   
2. **Purpose**: 
   - **Interaction**: Primarily used to interact with web page content, such as extracting or modifying data, injecting HTML/CSS, or interacting with user actions on the page.
   
3. **Execution**:
   - **Injection Timing**: Can be injected at different stages of page loading (`document_start`, `document_end`, `document_idle`).
   - **Isolation**: Run in an isolated environment to avoid conflicts with the page's scripts.

4. **Communication**:
   - **Message Passing**: Can communicate with background scripts via message passing (`chrome.runtime.sendMessage` and `chrome.runtime.onMessage`).

#### **Background Scripts**

1. **Environment**:
   - **Context**: Run in the background of the browser, independent of specific web pages.
   - **Access**: Can perform tasks like handling browser events, maintaining persistent state, or managing network requests.
   
2. **Purpose**:
   - **Management**: Used for tasks that require continuous operation or interaction with browser APIs, such as handling alarms, managing user preferences, or communicating with web servers.
   
3. **Execution**:
   - **Persistence**: In Manifest V2, background scripts can be persistent or event-driven (event pages). In Manifest V3, they use service workers which are event-driven and do not run persistently.
   - **Global Scope**: Operate globally across all tabs and windows.

4. **Communication**:
   - **Message Passing**: Can communicate with content scripts and other parts of the extension using message passing.

### **Live Example: Weather Update Extension**

Let’s build a simple Chrome extension that shows weather information for a city and updates it periodically. This example will use a content script to extract user input from a webpage and a background script to fetch weather data and update notifications.

#### **1. `manifest.json`**

```json
{
  "manifest_version": 3,
  "name": "Weather Update Extension",
  "version": "1.0",
  "description": "Get weather updates for your city.",
  "permissions": [
    "notifications",
    "storage",
    "activeTab",
    "https://api.weatherapi.com/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
  "action": {
    "default_popup": "popup.html"
  },
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

#### **2. `content.js`**

```javascript
// Content script for extracting user input from the page

// Function to extract city name from a specific element (e.g., an input field)
function extractCityName() {
  const cityInput = document.querySelector('#city-input');
  if (cityInput) {
    const cityName = cityInput.value;
    chrome.runtime.sendMessage({ action: 'fetchWeather', city: cityName });
  }
}

// Example: Attach a listener to a button to trigger the extraction
const getWeatherButton = document.querySelector('#get-weather');
if (getWeatherButton) {
  getWeatherButton.addEventListener('click', extractCityName);
}
```

#### **3. `background.js`**

```javascript
// Background script for fetching weather data and showing notifications

const API_KEY = 'YOUR_WEATHER_API_KEY';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'fetchWeather') {
    const city = message.city;
    fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`)
      .then(response => response.json())
      .then(data => {
        const weather = `Current weather in ${city}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon48.png',
          title: 'Weather Update',
          message: weather,
          priority: 2
        });
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
});
```

#### **4. `popup.html`**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Weather Updates</title>
  <style>
    body { width: 300px; }
  </style>
</head>
<body>
  <h1>Weather</h1>
  <div id="weather-info">Click the button on the page to get updates.</div>
</body>
</html>
```

### **Explanation**

- **Content Script (`content.js`)**:
  - **Role**: Extracts the city name from a webpage input field when a button is clicked and sends it to the background script.
  - **Execution**: Runs in the context of the web page to interact with page elements.

- **Background Script (`background.js`)**:
  - **Role**: Receives the city name from the content script, fetches weather data from an API, and displays a notification with the weather information.
  - **Execution**: Runs in the background, independently of specific web pages, and manages API requests and notifications.

This example demonstrates how content scripts and background scripts can work together: the content script handles interaction with the webpage, while the background script performs tasks that require continuous operation and API interaction.