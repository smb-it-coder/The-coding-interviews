Unlike class-based components, React functional components with hooks don't have a traditional lifecycle with methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. However, hooks like `useEffect` provide functionalities similar to these lifecycle methods. Here's a breakdown of the React hook component lifecycle with a live e-commerce example:

**1. Component Creation (Mounting):**

- When a React hook component is first rendered, the following happens:
    - The component function is executed.
    - The state variables (`useState`) and references (`useRef`) are initialized with their initial values.
    - The `useEffect` hook (if present) runs its effect function **once**. This is similar to `componentDidMount` in class components. You can use this to fetch initial data, set up event listeners, or perform other side effects that need to happen only once after the component mounts.

**2. Component Updates (Re-rendering):**

- When a component needs to re-render due to state or prop changes, the following occurs:
    - The component function is executed again with the updated state or props.
    - `useState` updates the state values.
    - `useEffect` behaves differently depending on its dependency array:
        - If the dependency array is empty (`[]`), the effect function **doesn't run** on subsequent re-renders.
        - If the dependency array includes any state or prop values that have changed, the effect function **re-runs** with the updated values. This is similar to `componentDidUpdate` in class components. You can use this to update side effects based on changes in state or props.

**Live E-commerce Example:**

Consider a product listing component that fetches data and displays product information with an "Add to Cart" button. We'll use hooks to manage state and side effects:

```javascript
import React, { useState, useEffect } from 'react';

function ProductListing({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://api.example.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct(); // Fetch data on mount (similar to componentDidMount)
  }, [productId]); // Re-run effect if productId changes

  const addToCart = () => {
    // Add product to cart logic
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}
```

**Explanation:**

- The `useState` hook manages the `product` state to store product data.
- The `useEffect` hook fetches product information from an API using the `productId` prop.
    - The empty dependency array `[]` ensures the fetch happens only once on mount.
    - This mimics the behavior of `componentDidMount` in a class component.
- The `addToCart` function handles adding the product to the cart (not shown in detail).
- The component conditionally renders product details or a loading message.

**Key Points:**

- `useState` helps manage component state within the functional component.
- `useEffect` allows you to perform side effects like data fetching, subscriptions, or DOM manipulation, similar to lifecycle methods in class components.
- By managing dependencies in the `useEffect` hook's dependency array, you control when the effect function re-runs.

**Remember:**

- Avoid unnecessary re-renders by using `useEffect` with appropriate dependency arrays.
- Consider using `useCallback` or `useMemo` for performance optimization when dealing with expensive functions within `useEffect`.

By understanding how React functional components work with hooks, you can build dynamic and performant e-commerce applications and other React experiences.