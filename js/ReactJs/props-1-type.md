In React.js, props can generally be categorized into two main types based on how they are passed and used:

1. **Regular Props:**
   - These are the most common type of props used in React.
   - Regular props are passed from parent components to child components explicitly.
   - They are defined as attributes on JSX elements when rendering components.
   - Regular props are accessed inside the child component via the `props` object.

   Example:
   ```jsx
   // Parent Component
   <ChildComponent name="John" age={30} />

   // Child Component
   const ChildComponent = (props) => {
     return (
       <div>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
       </div>
     );
   }
   ```

2. **Special Props (or "Implicit Props"):**
   - These props are provided by React itself or have special meaning in certain contexts.
   - They are not explicitly passed by parent components but are accessible to components based on their context or how they are used within React's ecosystem.

   Examples of special props include:
   - `key`: Used by React internally for list reconciliation (should be unique among siblings).
   - `ref`: Used to get a reference to a React element or component instance.
   - `children`: Represents the content between the opening and closing tags of a component in JSX.

   Example:
   ```jsx
   // Using children prop
   <ParentComponent>
     <ChildComponent />
   </ParentComponent>

   // Parent Component
   const ParentComponent = (props) => {
     return (
       <div>
         {props.children} {/* Renders ChildComponent */}
       </div>
     );
   }

   // Child Component
   const ChildComponent = () => {
     return (
       <div>
         <p>Hello, I am a child component!</p>
       </div>
     );
   }
   ```

These two categories cover the majority of props usage in React applications. Regular props are essential for passing data down the component hierarchy, while special props provide additional functionality or context within the React framework. Understanding how and when to use each type of prop is crucial for building efficient and maintainable React applications.