Certainly! The `useMemo` hook in React is used for memoizing expensive calculations so that they are not recomputed on every render. It is similar to `useCallback`, but instead of memoizing functions, `useMemo` memoizes the result of a function.

### How `useMemo` Works

The `useMemo` hook takes two main parameters:
1. A function that returns a value (the "create" function).
2. An array of dependencies (optional).

It returns a memoized value that only changes when one of the dependencies has changed. This optimization helps to avoid unnecessary computations during renders.

### Example: Using `useMemo` in an E-commerce Application

Let's create an example where we use `useMemo` to calculate and memoize the total price of items in a shopping cart in an e-commerce application.

```jsx
import React, { useState, useMemo } from 'react';

// Cart component - Renders shopping cart
const Cart = ({ cartItems }) => {
  console.log('Rendering Cart');

  // useMemo to memoize total calculation
  const totalPrice = useMemo(() => {
    console.log('Calculating total price');
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]); // Recalculate only if cartItems change

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

// Main App component
const App = () => {
  // Example cart items state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 30, quantity: 3 },
  ]);

  return (
    <div className="app">
      <h1>E-commerce App</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
```

### Explanation:

1. **Cart Component (`Cart`)**:
   - `useMemo` is used to memoize the `totalPrice` calculation.
   - The memoized `totalPrice` is recalculated only if `cartItems` change (`[cartItems]` dependency array).

2. **App Component (`App`)**:
   - Renders the main `App` component with the `Cart` component and passes `cartItems` as props.

### Controlling with All Options & Default Parameters

To control all options and default parameters in `useMemo`:
- The first argument is the "create" function that computes the memoized value.
- The second argument is an array of dependencies (`dependencies`), which are values that, when changed, will trigger the recreation of the memoized value.
- The memoized value is returned from `useMemo` and can be used as any regular value.

In the provided example:
- The `totalPrice` is memoized using `useMemo` with `cartItems` as a dependency. This ensures that `totalPrice` is only recalculated when `cartItems` change.

### E-commerce Example Usage

In an e-commerce application:
- `useMemo` can be used to memoize expensive calculations such as total prices, filtered lists, or derived data.
- This optimization ensures that these calculations are only performed when necessary, reducing unnecessary computations and improving performance.

### Summary

- **Performance Optimization**: `useMemo` optimizes performance by memoizing the result of a function.
- **Dependencies**: You control when the memoized value is recomputed by specifying dependencies.
- **E-commerce Example**: Used in components handling shopping carts, price calculations, or any derived data that relies on stable dependencies.

By using `useMemo`, you can optimize performance in React applications by memoizing expensive calculations and derived data. This ensures that your components render efficiently, especially in scenarios where performance is critical, such as in large-scale e-commerce applications.