I'd be glad to explain the `useEffect` hook in React in depth, providing multiple live examples with an e-commerce context:

**What is `useEffect`?**

The `useEffect` hook is a powerful tool in React that allows you to perform side effects within functional components. Side effects are operations that interact with external systems (like data fetching, subscriptions, or DOM manipulation) or cause mutations that wouldn't be part of the component's rendering logic itself.

**Key Concepts:**

- **Effect Function:** `useEffect` takes a function as its argument. This function contains the side effect logic you want to execute.
- **Dependency Array (Optional):** You can optionally provide a second argument to `useEffect` as an array. This array specifies the values that the effect depends on. When any of these values change, the effect function will be re-run. An empty dependency array `[]` indicates the effect runs only once after the initial render.

**Common Use Cases in E-commerce:**

**1. Fetching Product Data:**

```javascript
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts(); // Call the function to fetch data on component mount
  }, []); // Empty dependency array: fetch only once

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

In this example, `useEffect` fetches product data from an API when the component mounts (empty dependency array). The fetched data is then used to update the `products` state using `setProducts`.

**2. Running Timers or Intervals:**

```javascript
import React, { useState, useEffect } from 'react';

function ProductSaleCountdown({ endTime }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateRemainingTime(endTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeRemaining = calculateRemainingTime(endTime);
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(intervalId); // Clear interval when time runs out
      }
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [endTime]); // Re-run effect when endTime changes

  return (
    <div>
      Sale ends in: {timeRemaining}
    </div>
  );
}
```

Here, `useEffect` creates an interval that updates the `timeRemaining` state every second. The interval continues until the sale ends (when `timeRemaining` becomes 0) or when the component unmounts (clean-up function using `return`).

**3. Manual DOM Manipulation:**

While React generally handles DOM updates through the virtual DOM, there are occasional scenarios where you might need to directly manipulate DOM elements. Here's an example with a caveat:

```javascript
import React, { useRef, useEffect } from 'react';

function ImageCarousel({ images }) {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Adjust image dimensions based on carousel width
      const imageWidth = carouselRef.current.offsetWidth / images.length;
      images.forEach((image) => (image.style.width = `${imageWidth}px`));
    };

    window.addEventListener('resize', handleResize); // Manual DOM manipulation

    handleResize(); // Call initially on component mount

    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, [images]); // Re-run effect when images change

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div ref={carouselRef} className="carousel">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{ transform: `translateX(-${current