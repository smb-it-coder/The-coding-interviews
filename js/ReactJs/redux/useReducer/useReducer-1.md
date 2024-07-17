`useReducer` is a React hook that provides an alternative to `useState` for managing state in functional components, especially when the state logic is more complex and involves multiple sub-values or when actions need to be dispatched to modify the state. It is inspired by Redux's reducer pattern.

### How `useReducer` Works

The `useReducer` hook accepts two arguments:
1. A **reducer function**: This function specifies how the state should be updated in response to dispatched actions. It takes the current state and an action as arguments, and returns the new state.
2. An **initial state**: This is the initial value of the state.

When you call `useReducer(reducer, initialState)`, it returns an array with two elements:
- `state`: The current state value.
- `dispatch`: A function that you can call to dispatch an action. When `dispatch` is called with an action object, React calls the reducer with the current state and that action object.

### Example of `useReducer`

Let's create a simple counter application using `useReducer`.

```jsx
import React, { useReducer } from 'react';

// Reducer function
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState; // Reset to initial state
    default:
      throw new Error();
  }
}

function Counter() {
  // useReducer returns [state, dispatch]
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;
```

### Explanation

1. **Reducer Function (`reducer`)**:
   - This function specifies how the state updates in response to actions. It takes `state` and `action` as parameters and returns a new state based on the action type.
   
2. **Initial State (`initialState`)**:
   - Defines the initial state of our application, which in this case includes a `count` property initialized to `0`.

3. **`useReducer(reducer, initialState)`**:
   - This hook is called in the `Counter` component to initialize the state (`state`) with the initial state (`initialState`) and to obtain a `dispatch` function for sending actions to the reducer.

4. **Dispatching Actions**:
   - Each button (`Increment`, `Decrement`, `Reset`) calls `dispatch` with an action object `{ type: 'increment' }`, `{ type: 'decrement' }`, or `{ type: 'reset' }`. This action object is passed to the `reducer`, which updates the state accordingly.

5. **Rendering**:
   - The component renders the current count (`state.count`) and three buttons that dispatch actions to modify the count.

### Benefits of `useReducer`

- **Centralized State Logic**: Helps manage complex state logic in a centralized manner, especially when state transitions depend on previous state or when the state is more complex than a simple value.
  
- **Predictable State Updates**: Actions and their effects on state are explicitly defined in the reducer function, making it easier to reason about state changes.

- **Component Tree Optimization**: You can optimize performance by passing down the `dispatch` function instead of callback props through multiple levels of components.

In summary, `useReducer` is useful when state management becomes complex and can provide a more structured approach to managing state in your React application. It's particularly powerful when combined with context API for managing global state or when multiple components need to share and update the same state.