In React.js, a "prop" (short for properties) is a way to pass data from a parent component to a child component. Props are immutable and are used to communicate between components in a React application. Understanding props is fundamental to React development because they allow you to create reusable and modular components that can be composed together to build complex UIs.

### How Props Work

1. **Passing Props from Parent to Child:**
   - Props are passed from parent to child components similar to HTML attributes.
   - In the parent component, you specify props when you render a child component.

2. **Child Component Receives Props:**
   - In the child component, props are received as an object and can be accessed using dot notation (`props.someProp`).

3. **Immutable Nature of Props:**
   - Props in React are immutable, meaning that child components cannot modify the props they receive from their parent. They are read-only.

### Example

Let's illustrate with a simple example where we have a parent component (`Parent`) and a child component (`Child`) that receives a prop from its parent.

**Parent Component (`Parent.js`):**

```jsx
import React from 'react';
import Child from './Child';

const Parent = () => {
  const greeting = 'Hello from Parent Component';

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={greeting} />
    </div>
  );
};

export default Parent;
```

In this example:
- `Parent` component renders a `Child` component.
- It passes a prop `message` to `Child` with the value `'Hello from Parent Component'`.

**Child Component (`Child.js`):**

```jsx
import React from 'react';

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
};

export default Child;
```

In the `Child` component:
- `props` is an object that contains all the props passed to the component.
- `props.message` accesses the `message` prop passed from `Parent`.

### Explanation

- **Parent Component:** Defines a string `greeting` and renders a `Child` component, passing `greeting` as a prop named `message`.
  
- **Child Component:** Receives `props` as an argument in its functional component and displays the `message` prop from `Parent`.

### Key Points

- **Unidirectional Data Flow:** Props flow from parent to child components and are immutable.
  
- **Data Passing:** Props can contain any type of data (strings, objects, functions, etc.).
  
- **Dynamic Components:** Props enable dynamic and flexible component rendering based on data passed from higher-level components.

Using props effectively allows React applications to maintain a clear data flow and enables the creation of reusable components, enhancing code maintainability and scalability.