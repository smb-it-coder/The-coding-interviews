# handled & unhandled component in react js

In React.js, components deal with errors differently depending on whether they are wrapped in an error boundary component or not. Let's break down handled and unhandled components:

## Handled Components (Error Boundaries):

 - **Error Boundaries:** 
    These are special React components that can catch errors occurring anywhere in their child component tree. They prevent the entire application from crashing by providing a fallback UI when an error happens within their boundaries.
 - **How it Works:** When an error occurs within a component wrapped by an error boundary, the error boundary  
    catches it. It then displays the fallback UI instead of the crashing component's content. This allows the rest of the application to function normally despite the error in a specific section.
 - **Benefits:**
   - **Improved user experience:** Users see a graceful fallback message instead of a broken UI.
   - **Isolation:** Errors in one part of the application don't bring down the entire app.
   - **Debugging:** Error boundaries often provide helpful information about the error, aiding debugging.
## Unhandled Components:

 - **No Error Boundary:** Components not wrapped by an error boundary are considered unhandled.
 - **Error Behavior:** If an error occurs in an unhandled component, React will:
    - Log the error message to the console.
    - Unmount the entire component tree, potentially leading to a blank screen or unexpected behavior.

**Drawbacks:**
 - Crashes: Unhandled errors can crash the entire application, leading to a poor user experience.
 - Debugging Difficulty: Identifying the source of the error can be harder without clear error boundaries.

**Best Practices:**

    - Use error boundaries strategically: Wrap critical components that need to remain functional
       even if errors occur in child components.
    - Consider using libraries like react-error-boundary for easier error boundary implementation.
    - Implement proper error handling within components: Use try...catch blocks or lifecycle methods 
      to handle potential errors within components themselves.
    
 By understanding handled and unhandled components in React, you can build more robust and user-friendly applications. Remember, error boundaries are a powerful tool to improve error handling and user experience in your React projects.