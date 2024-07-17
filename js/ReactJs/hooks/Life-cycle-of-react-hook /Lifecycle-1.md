In React, functional components using hooks do not have lifecycle methods like class components. Instead, they use hooks like `useState`, `useEffect`, `useMemo`, etc., to manage state and side effects. These hooks provide similar functionality to lifecycle methods in class components but in a more declarative and modular way. Let's explore the lifecycle of a functional component using hooks in depth with a live example in the context of an e-commerce application.

### Lifecycle of a Functional Component with Hooks

1. **Mounting Phase**:
   - **Rendering**: The component function is called, and JSX is rendered.
   - **State Initialization**: State variables are initialized using `useState`.
   - **Effect Execution**: Effects specified in `useEffect` run after the first render.

2. **Updating Phase**:
   - **Re-render**: Component re-renders when state or props change.
   - **Effect Cleanup & Re-run**: Effects specified in `useEffect` clean up (if specified) and re-run if dependencies change.

3. **Unmounting Phase**:
   - **Cleanup**: Clean-up functions in `useEffect` run when the component is unmounted.

### Example: Lifecycle in an E-commerce Application

Let's build a simplified e-commerce product listing and cart interaction example to demonstrate the lifecycle of a functional component with hooks.

```jsx
import React, { useState, useEffect } from 'react';

// ProductList component - Renders list of products
const ProductList = () => {
  // State for products
  const [products, setProducts] = useState([]);

  // useEffect for fetching products on mount
  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // useEffect for logging when products change
  useEffect(() => {
    console.log('Products updated:', products);
  }, [products]);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="app">
      <h1>E-commerce App</h1>
      <ProductList />
    </div>
  );
};

export default App;
```

### Explanation:

1. **ProductList Component**:
   - **Mounting Phase**:
     - `useState` is used to initialize `products` state.
     - First `useEffect` fetches products from an API (`fetch('https://api.example.com/products')`) when the component mounts (`[]` dependency array).
   - **Updating Phase**:
     - Second `useEffect` logs whenever `products` state changes (`[products]` dependency array).

2. **App Component**:
   - Renders the `ProductList` component within the `App` component.

### Detailed Lifecycle Steps:

- **Mounting Phase**:
  - Component function is called.
  - `useState` initializes `products` state.
  - First `useEffect` fetches products from API once when the component mounts.
  - JSX is rendered with initial state (`products` initially empty).

- **Updating Phase**:
  - If `products` state changes (e.g., after fetching data), component re-renders.
  - Second `useEffect` logs updated `products` whenever `products` state changes.

- **Unmounting Phase**:
  - In this example, there's no unmounting scenario since `ProductList` is not unmounted.

### Summary:

- **Mounting**: Initialization of state and execution of `useEffect` with an empty dependency array for one-time actions.
- **Updating**: Re-renders triggered by state changes, and `useEffect` with dependencies to react to specific state changes.
- **Unmounting**: Cleanup functions in `useEffect` run when the component is unmounted, handling any necessary clean-up tasks.

Hooks like `useState` and `useEffect` allow functional components to manage state and side effects effectively, mimicking the lifecycle behavior of class components. Understanding these patterns helps in building robust and performant React applications, such as e-commerce platforms, where data fetching and state management are crucial.