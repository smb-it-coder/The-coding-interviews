Certainly! Let’s use an eCommerce project as a context to illustrate different types of middleware in Express.js. We'll cover:

1. **Application-Level Middleware**
2. **Router-Level Middleware**
3. **Error-Handling Middleware**
4. **Built-In Middleware**
5. **Third-Party Middleware**
6. **Custom Middleware**
7. **Route-Specific Middleware**
8. **Asynchronous Middleware**

### **1. Application-Level Middleware**

Application-level middleware is applied to the entire application or specific routes.

**Example:**

```javascript
const express = require('express');
const app = express();

// Global Middleware
app.use(express.json()); // Parses JSON request bodies

app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next();
});
```

### **2. Router-Level Middleware**

Router-level middleware is used with Express routers to handle specific groups of routes.

**Example:**

```javascript
const express = require('express');
const app = express();
const adminRouter = express.Router();

// Admin Router-Level Middleware
adminRouter.use((req, res, next) => {
    console.log('Admin route accessed');
    next();
});

adminRouter.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

app.use('/admin', adminRouter);
```

### **3. Error-Handling Middleware**

Error-handling middleware is used to handle errors and provide error responses.

**Example:**

```javascript
// Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
```

### **4. Built-In Middleware**

Express provides built-in middleware functions for common tasks.

**Example:**

```javascript
// Serve static files from the 'public' directory
app.use(express.static('public')); 

// Example of serving static assets
// Assuming you have a directory named 'public' with an image file
// Access it with http://localhost:3000/images/sample.jpg
```

### **5. Third-Party Middleware**

Third-party middleware can be used to add additional functionality such as logging, security, and CORS.

**Example:**

```javascript
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Middleware for logging HTTP requests
app.use(morgan('combined'));

// Middleware for setting security headers
app.use(helmet());

// Middleware for enabling CORS
app.use(cors());
```

### **6. Custom Middleware**

Custom middleware functions can be created for specific tasks such as adding properties to the request object or validating requests.

**Example:**

```javascript
// Custom Middleware to add a timestamp to request
function requestTimeMiddleware(req, res, next) {
    req.requestTime = Date.now();
    next();
}

app.use(requestTimeMiddleware);

app.get('/time', (req, res) => {
    res.send(`Request received at ${new Date(req.requestTime).toISOString()}`);
});
```

### **7. Route-Specific Middleware**

Route-specific middleware is applied to specific routes or route handlers.

**Example:**

```javascript
// Route-Specific Middleware for user authentication
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(403).send('Forbidden');
}

app.post('/checkout', isAuthenticated, (req, res) => {
    // Handle checkout process
    res.send('Checkout successful');
});
```

### **8. Asynchronous Middleware**

Asynchronous middleware handles operations that involve promises or async/await, such as database queries.

**Example:**

```javascript
// Asynchronous Middleware to fetch user data from the database
app.use(async (req, res, next) => {
    try {
        // Simulate database operation
        req.user = await fetchUserFromDatabase(req.headers['user-id']);
        next();
    } catch (err) {
        next(err); // Pass errors to error-handling middleware
    }
});

// Example route using the fetched user data
app.get('/profile', (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.status(404).send('User not found');
    }
});
```

### **Complete eCommerce Example**

Combining all the middleware types in a basic eCommerce application example:

```javascript
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Third-Party Middleware
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

// Custom Middleware
function requestTimeMiddleware(req, res, next) {
    req.requestTime = Date.now();
    next();
}
app.use(requestTimeMiddleware);

// Router-Level Middleware
const adminRouter = express.Router();
adminRouter.use((req, res, next) => {
    console.log('Admin route accessed');
    next();
});

adminRouter.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});
app.use('/admin', adminRouter);

// Route-Specific Middleware
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(403).send('Forbidden');
}

// Asynchronous Middleware
app.use(async (req, res, next) => {
    try {
        req.user = await fetchUserFromDatabase(req.headers['user-id']);
        next();
    } catch (err) {
        next(err); // Pass errors to error-handling middleware
    }
});

// Routes
app.get('/products', (req, res) => {
    res.send('Products List');
});

app.post('/checkout', isAuthenticated, (req, res) => {
    res.send('Checkout successful');
});

app.get('/profile', (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.status(404).send('User not found');
    }
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Simulated asynchronous function
async function fetchUserFromDatabase(userId) {
    // Simulate database fetch with a delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: userId, name: 'John Doe' });
        }, 1000);
    });
}
```

### **Summary**

In this example:

- **Application-Level Middleware**: Applies to the entire app or specific routes.
- **Router-Level Middleware**: Applies to specific routers.
- **Error-Handling Middleware**: Catches and handles errors.
- **Built-In Middleware**: Handles common tasks like parsing and serving static files.
- **Third-Party Middleware**: Adds additional functionality like logging, security, and CORS.
- **Custom Middleware**: User-defined functions for specific tasks.
- **Route-Specific Middleware**: Applied to specific routes.
- **Asynchronous Middleware**: Handles asynchronous operations.

Each type of middleware plays a crucial role in building a robust and flexible eCommerce application.