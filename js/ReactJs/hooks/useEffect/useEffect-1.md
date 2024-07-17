Certainly! The `useEffect` hook in React allows functional components to perform side effects. These side effects can include data fetching, subscriptions, manually changing the DOM, and more. `useEffect` runs after every render, including the initial render, unless specified otherwise. Let's explore `useEffect` in depth with multiple examples in the context of an e-commerce application.

### Example 1: Fetching Product Data

In an e-commerce application, you often need to fetch product data from an API. Let's use `useEffect` to fetch and display product data.

```jsx
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

**Explanation**:
- `useEffect` hook is used to fetch product data from an API (`fetch('https://api.example.com/products')`).
- The empty dependency array (`[]`) as the second argument ensures that the effect runs only once after the initial render.
- `products` state is updated with the fetched data using `setProducts(data)`.

### Example 2: Subscribing to Real-Time Updates

In an e-commerce site, you might need to subscribe to real-time updates for products or notifications. Let's simulate a subscription using `useEffect`.

```jsx
import React, { useState, useEffect } from 'react';

function Notifications() {
  const [newNotification, setNewNotification] = useState(null);

  useEffect(() => {
    const subscription = subscribeToNotifications((notification) => {
      setNewNotification(notification);
    });

    return () => {
      // Clean up subscription on component unmount
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="notifications">
      {newNotification && (
        <div className="notification">
          New notification: {newNotification.message}
        </div>
      )}
    </div>
  );
}

// Simulated subscription function
function subscribeToNotifications(callback) {
  // Simulate real-time updates with setTimeout
  const timerId = setTimeout(() => {
    callback({ message: 'New product added!' });
  }, 5000);

  return {
    unsubscribe: () => clearTimeout(timerId)
  };
}

export default Notifications;
```

**Explanation**:
- `useEffect` hook is used to subscribe to notifications (`subscribeToNotifications` function).
- The subscription function (`subscribeToNotifications`) returns an object with an `unsubscribe` method to clean up the subscription on component unmount (`return () => { subscription.unsubscribe(); };`).
- Simulated real-time updates are handled with `setTimeout`.

### Example 3: Managing Document Title

You might want to update the document title dynamically based on the currently viewed product in an e-commerce application.

```jsx
import React, { useState, useEffect } from 'react';

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        document.title = `E-commerce App | ${data.name}`;
      })
      .catch(error => console.error('Error fetching product details:', error));

    // Cleanup function to reset document title
    return () => {
      document.title = 'E-commerce App';
    };
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
```

**Explanation**:
- `useEffect` hook is used to fetch product details based on `productId` and update the document title (`document.title = ...`).
- The effect runs whenever `productId` changes (`[productId]` dependency array).
- Cleanup function resets the document title when the component unmounts (`return () => { document.title = 'E-commerce App'; };`).

### Summary

- **Data Fetching**: Use `useEffect` to fetch data from APIs.
- **Subscriptions**: Use `useEffect` for subscribing to real-time updates and clean up subscriptions.
- **Document Title**: Use `useEffect` to dynamically update the document title based on component state.

`useEffect` is a powerful hook for handling side effects in functional components, allowing you to fetch data, manage subscriptions, manipulate the DOM, and more. Understanding how to utilize it effectively can greatly enhance the functionality and user experience of your e-commerce application.