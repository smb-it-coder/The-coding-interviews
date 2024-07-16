Redux is a predictable state container for JavaScript applications, primarily used with libraries like React or Angular for managing application state. It follows the principles of Flux, but with a more streamlined approach, focusing on 3 main principles or "pillars": 

  - **Single Source of Truth**,
  - **State is Read-Only**, 
  - **Changes are Made with Pure Functions**.

### 1. Single Source of Truth

In Redux, the entire state of your application is stored in a single JavaScript object called the **store**. This makes it easier to keep track of state throughout your application, as there's only one place to look for it.

**Example:**

Let's consider a simple counter application:

```javascript
// Define Redux store
import { createStore } from 'redux';

// Reducer function
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

// Access state
console.log(store.getState()); // { count: 0 }

// Dispatch actions to update state
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // { count: 0 }
```

In this example:
- The entire state (`{ count: 0 }`) is managed in the Redux store.
- Actions (`INCREMENT` and `DECREMENT`) are dispatched to update the state.
- The reducer function (`counterReducer`) specifies how the state changes in response to actions.

### 2. State is Read-Only

In Redux, state cannot be modified directly. Instead, you specify the changes you want to make with plain JavaScript objects called **actions**. These actions are dispatched to the store, where the **reducer** takes care of applying those changes to the state.

**Example:**

```javascript
// Actions
const increment = () => {
  return { type: 'INCREMENT' };
};

const decrement = () => {
  return { type: 'DECREMENT' };
};

// Dispatch actions to update state
store.dispatch(increment());
console.log(store.getState()); // { count: 1 }

store.dispatch(decrement());
console.log(store.getState()); // { count: 0 }
```

In this example:
- `increment` and `decrement` are action creator functions that return action objects.
- These actions are dispatched to the Redux store using `store.dispatch()`, triggering the state update through the `counterReducer`.

### 3. Changes are Made with Pure Functions

Reducers in Redux are pure functions that specify how the application's state changes in response to actions. They take the previous state and an action, and return the next state without modifying the previous state. This ensures predictability and makes debugging easier.

**Example:**

```javascript
// Reducer function (pure function)
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }; // Pure function: only depends on arguments
    case 'DECREMENT':
      return { count: state.count - 1 }; // Pure function: no side effects
    default:
      return state;
  }
};
```

In this example:
- `counterReducer` is a pure function because it only depends on its arguments (`state` and `action`) and produces no side effects.
- It returns a new object (`{ count: ... }`) for each action type, leaving the original `state` object unchanged.

### Summary

Redux provides a robust architecture for managing application state by enforcing a single source of truth, immutability of state, and pure functions to update state. This makes it easier to understand how data flows through your application, maintain consistency, and debug issues related to state management.
