Error handling in functional components in React.js involves using error boundaries and error handling techniques to gracefully manage and display errors that occur during rendering, in event handlers, or while fetching data. Here’s how you can handle errors effectively in functional components:

### Using Error Boundaries

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. In functional components, you can create an error boundary using `useErrorBoundary` from third-party libraries like `react-error-boundary`.

1. **Install `react-error-boundary`:**

   First, install the `react-error-boundary` library:

   ```bash
   npm install react-error-boundary
   # or
   yarn add react-error-boundary
   ```

2. **Implementing Error Boundary:**

   Use the `useErrorHandler` hook from `react-error-boundary` to create an error boundary around your functional component.

   ```jsx
   // ErrorBoundary.jsx
   import React from 'react';
   import { useErrorHandler } from 'react-error-boundary';

   const ErrorBoundary = ({ children }) => {
     const handleError = useErrorHandler();

     return (
       <div>
         {children}
         {handleError && (
           <div>
             <h2>Something went wrong...</h2>
             <button onClick={() => handleError.resetErrorBoundary()}>
               Try again
             </button>
           </div>
         )}
       </div>
     );
   };

   export default ErrorBoundary;
   ```

   - `useErrorHandler` hook returns a function (`handleError`) that can be used to manage errors within the component.
   - You can display an error message or a retry button inside the error boundary component.

3. **Using Error Boundary in Your Functional Component:**

   Wrap your functional component with `ErrorBoundary` to catch and handle errors.

   ```jsx
   // MyComponent.jsx
   import React from 'react';
   import ErrorBoundary from './ErrorBoundary';

   const MyComponent = () => {
     // Simulate an error
     if (true) {
       throw new Error('Error occurred!');
     }

     return (
       <div>
         <h2>My Component</h2>
         {/* Your component UI */}
       </div>
     );
   };

   const MyComponentWithErrorBoundary = () => {
     return (
       <ErrorBoundary>
         <MyComponent />
       </ErrorBoundary>
     );
   };

   export default MyComponentWithErrorBoundary;
   ```

   - When an error occurs in `MyComponent`, it will be caught by `ErrorBoundary`, and you can handle it gracefully.

### Handling Errors in Data Fetching

When fetching data in a functional component, you can use `try...catch` blocks to handle errors from asynchronous operations like API calls.

```jsx
// Example using fetch
import React, { useState, useEffect } from 'react';

const FetchDataExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          {/* Render data */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FetchDataExample;
```

- In the `useEffect` hook, `fetchData` function is defined to fetch data from an API endpoint.
- `try...catch` block is used to catch errors that occur during the fetch operation.
- If an error occurs (`catch` block), `setError` updates the state with the error message, and it is displayed in the component.

### Conclusion

Error handling in functional components in React involves using error boundaries to catch and manage errors in a structured way, as well as using `try...catch` blocks to handle errors from asynchronous operations. This ensures that your application remains stable and provides a good user experience even in case of unexpected errors.