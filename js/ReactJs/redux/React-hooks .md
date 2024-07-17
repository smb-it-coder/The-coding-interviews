Sure, here's a list of commonly used React hooks along with brief explanations and examples for each:

### 1. **useState**
- Manages state in functional components.
- Returns current state and a function to update it.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 2. **useEffect**
- Performs side effects in functional components (e.g., data fetching, subscriptions).
- Runs after every render by default.

```jsx
import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array runs effect only once

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}
```

### 3. **useContext**
- Accepts a context object created by `React.createContext`.
- Allows consuming the nearest current value of that context.

```jsx
import React, { useContext } from 'react';
const MyContext = React.createContext(defaultValue);

function MyComponent() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}
```

### 4. **useReducer**
- Alternative to `useState` for complex state logic.
- Accepts a reducer function with current state and action.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

### 5. **useCallback**
- Memoizes functions to avoid recreating them on every render.
- Useful for optimizing performance in child components.

```jsx
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
}

function ChildComponent({ increment }) {
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### 6. **useMemo**
- Memoizes expensive calculations so they are only recomputed when dependencies change.
- Helps optimize performance by caching values.

```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  const expensiveResult = useMemo(() => {
    // Expensive calculation based on 'a' and 'b'
    return a * b;
  }, [a, b]);

  return <p>Result: {expensiveResult}</p>;
}
```

### 7. **useRef**
- Returns a mutable ref object whose `.current` property is initialized to the passed argument.
- Persists between renders and does not cause re-renders when its value changes.

```jsx
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
```

These are some of the most frequently used React hooks. Each serves a specific purpose in managing state, handling side effects, optimizing performance, or integrating with context and refs.