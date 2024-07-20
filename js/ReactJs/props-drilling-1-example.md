Sure, let's consider a simplified example of an eCommerce application where we have a product listing page (`ProductList`) that fetches products from an API and displays them. Each product can be clicked to navigate to a detailed product page (`ProductDetail`). The goal is to demonstrate prop drilling when passing data between these components.

### Example Structure

1. **App Component**

The `App` component serves as the main entry point of our application. It contains routing logic to navigate between different pages.

```jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

2. **ProductList Component**

The `ProductList` component fetches a list of products from an API and renders each product as a list item. Each product is rendered using the `ProductItem` component.

```jsx
// ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch products
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductItem product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```

3. **ProductItem Component**

The `ProductItem` component receives a single product as a prop (`product`) and displays its basic details.

```jsx
// ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductItem;
```

4. **ProductDetail Component**

The `ProductDetail` component fetches detailed information about a specific product based on the `id` provided in the route parameters. It displays the detailed information of the product.

```jsx
// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch product details
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://api.example.com/product/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Additional product details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
```

### Explanation

- **Prop Drilling Example:**
  - In this example, prop drilling occurs when passing the `product` object from `ProductList` to `ProductItem`, and subsequently from `ProductItem` to `Link` in `ProductList`.
  - `ProductDetail` then fetches the detailed information about a specific product using the `id` from the route parameters.
  - Props (`product`) are drilled down from `ProductList` to `ProductItem` to `Link` and finally to `ProductDetail`.

- **Context for Refactoring:**
  - If the application grows and more components need access to product data, prop drilling might become cumbersome.
  - In such cases, using React Context or state management libraries like Redux can help manage and access shared state more efficiently across components without the need for prop drilling.

This example demonstrates a simple eCommerce application structure using React, illustrating how props are passed down through multiple levels of components (prop drilling) to manage and display product data.