I'd be glad to explain the `useMemo` hook in React with a live example, default parameter control, and an e-commerce context:

**What is `useMemo`?**

The `useMemo` hook in React is a performance optimization tool used to memoize the result of a function call. It takes two arguments:

1. **Function:** The function whose result you want to cache. This function can take any number of arguments.
2. **Dependency Array (Optional):** An array of values that the function depends on. If any of these values change, `useMemo` will re-execute the function and return a new cached result. An empty dependency array `[]` indicates the function runs only once after the initial render.

**Key Concepts:**

- **Memoization:** When `useMemo` is used, the result of the function is stored in memory based on the arguments passed. Subsequent calls to the function with the same arguments will retrieve the cached result instead of re-executing the function. This can improve performance, especially for expensive calculations that happen frequently.
- **Targeted Optimization:** `useMemo` allows you to memoize the result of specific calculations within a component, rather than memoizing an entire callback function like with `useCallback`.

**Benefits of `useMemo`:**

- **Improved Performance:** By caching the results of expensive calculations, `useMemo` can significantly reduce the number of times the function needs to be re-evaluated, leading to smoother rendering and improved user experience.
- **Enhanced Readability:** Separating complex calculations into memoized functions can improve code readability and maintainability.

**Live Example (E-commerce Product Discount Calculation):**

Imagine a product listing component in your e-commerce app where you need to display discounted prices. Here's how `useMemo` can be used:

```javascript
import React, { useState, useMemo } from 'react';

function ProductListing({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const calculateDiscountPrice = useMemo(() => {
    if (selectedQuantity >= 5) {
      return product.price * 0.9; // Apply 10% discount for bulk purchases
    } else {
      return product.price;
    }
  }, [selectedQuantity, product.price]); // Re-calculate only when quantity or price changes

  return (
    <div>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <label>Quantity:
        <select value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 or more</option>
        </select>
      </label>
      <p>Discounted Price: ${calculateDiscountPrice}</p>
    </div>
  );
}
```

In this example:

- The `calculateDiscountPrice` function uses `useMemo` to cache the discounted price based on the `selectedQuantity` and `product.price`.
- The dependency array ensures the function is re-evaluated only when these values change, avoiding unnecessary re-calculations.

**Default Parameter Control:**

Similar to `useCallback`, `useMemo` can handle default parameters. If a default value is provided for an argument within the function, you don't need to include that argument in the dependency array. The function will only be re-created if other dependencies or the function itself change.

```javascript
const calculateDiscountPrice = useMemo(() => {
  const discount = selectedQuantity >= 5 ? 0.1 : 0; // Default discount to 0
  return product.price * (1 - discount);
}, [selectedQuantity, product.price]);
```

**Additional Considerations:**

- Use `useMemo` judiciously. Memoizing unnecessary values might create more overhead than benefit. Analyze components for performance bottlenecks before applying.
- `useMemo` is particularly useful for expensive calculations that are used multiple times within a component or frequently re-evaluated due to state or prop changes.
- Consider alternatives like `Derived State` or `useReducer` for calculations that have complex dependencies or update state frequently.

By effectively utilizing `useMemo`, you can significantly improve the performance and responsiveness of your React components, especially in data-intensive applications like e-commerce stores.