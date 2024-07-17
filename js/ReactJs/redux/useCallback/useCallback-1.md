The `useCallback` hook in React is used for optimizing performance by memoizing functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

### How `useCallback` Works

The `useCallback` hook takes two main parameters:
1. A callback function.
2. An array of dependencies (optional).

It returns a memoized version of the callback function. The memoized version only changes if one of the dependencies has changed.

### Example: Using `useCallback` in an E-commerce Application

Let's create an example where we use `useCallback` to optimize performance in an e-commerce application where products are displayed and can be added to a cart.

```jsx
import React, { useState, useCallback } from 'react';

// Product component - Renders individual product
const Product = React.memo(({ product, onAddToCart }) => {
  console.log(`Rendering Product: ${product.id}`);

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

// ProductList component - Renders list of products
const ProductList = ({ products }) => {
  console.log('Rendering ProductList');

  // useCallback to memoize addToCart function
  const addToCart = useCallback((product) => {
    console.log(`Adding ${product.name} to cart`);
    // Logic to add product to cart
  }, []); // No dependencies, function remains constant

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

// Main App component
const App = () => {
  // Example product data
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div className="app">
      <h1>E-commerce App</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
```

### Explanation:

1. **Product Component (`Product`)**:
   - `React.memo` is used to memoize the `Product` component. It will only re-render if props (`product` or `onAddToCart`) change.
   - `onAddToCart` is passed as a prop to `Product`.

2. **ProductList Component (`ProductList`)**:
   - `useCallback` is used to memoize the `addToCart` function. It ensures that `addToCart` is not recreated on every render unless its dependencies (`[]` in this case) change.
   - The memoized `addToCart` function is passed down to `Product` components as `onAddToCart`.

3. **App Component (`App`)**:
   - Renders the main `App` component with `ProductList` component.

### Controlling with All Options & Default Parameters

To control all options and default parameters in `useCallback`:
- The first argument is the callback function you want to memoize.
- The second argument is an array of dependencies (`dependencies`), which are values that, when changed, will trigger the recreation of the memoized callback function.
- The memoized callback function is returned from `useCallback` and can be used as any regular function.

In the provided example:
- The `addToCart` function is memoized using `useCallback` with an empty dependency array (`[]`). This means `addToCart` will remain constant throughout the component's lifecycle since it has no dependencies.

### E-commerce Example Usage

In the context of an e-commerce application:
- `useCallback` can be used to memoize event handlers like adding items to the cart, applying filters, or handling pagination.
- This optimization ensures that child components that rely on these callbacks won't unnecessarily re-render if the function reference hasn't changed.

### Summary

- **Performance Optimization**: `useCallback` optimizes performance by memoizing functions.
- **Dependencies**: You can control when the memoized callback function is recreated by specifying dependencies.
- **E-commerce Example**: Used in components handling product lists and cart interactions to prevent unnecessary re-renders.

By using `useCallback`, you can effectively optimize performance in React applications by memoizing functions that rely on stable dependencies. This ensures that your components render efficiently, especially in scenarios where performance is critical, such as large-scale e-commerce applications.