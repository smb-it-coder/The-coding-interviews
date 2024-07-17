The `useContext` hook in React provides a way to consume a context (created with `React.createContext`) in a functional component. Context allows you to pass data through the component tree without having to pass props down manually at every level. It's especially useful for providing global data that many components need to access.

### How `useContext` Works

1. **Creating a Context**:
   - First, you create a context using `React.createContext`. This creates a Context object with a `Provider` component and a `Consumer` component.

2. **Providing the Context**:
   - You wrap your components (or part of your component tree) with the `Provider`. The `Provider` accepts a `value` prop which is the data you want to pass down.

3. **Consuming the Context**:
   - Components that need to access the context can use the `useContext` hook to retrieve the current context value provided by the nearest `Provider` above them in the tree.

### Example: Using `useContext` in an E-commerce Application

Let's create an example where we manage a user's authentication state using context and `useContext`.

#### Step 1: Create the Context

```jsx
// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
```

- **Explanation**:
  - `UserContext` is created using `createContext()`.
  - `UserProvider` is a component that wraps its children with `UserContext.Provider`.
  - It maintains a `user` state and provides `login` and `logout` functions through the context.

#### Step 2: Consume the Context

```jsx
// Navbar.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav>
      <div>E-commerce App</div>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login('guest')}>Login as Guest</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

- **Explanation**:
  - `useContext(UserContext)` allows `Navbar` to access the `user`, `login`, and `logout` functions from the `UserContext`.
  - Depending on whether `user` is authenticated (`user` exists), it displays either a welcome message with a logout button or a login button.

#### Step 3: Using the Context in Other Components

```jsx
// Profile.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
```

- **Explanation**:
  - `Profile` component uses `useContext(UserContext)` to access the `user` object from the context.
  - It displays a personalized welcome message if `user` is authenticated or prompts the user to login.

### Summary

- **Context Creation**: Use `createContext` to create a context object.
- **Provider**: Wrap components with a `Provider` to make the context available to them and their descendants.
- **Consumer (useContext)**: Use `useContext` hook to consume the context and access the context value in functional components.

`useContext` simplifies the process of consuming context compared to the traditional `Context.Consumer` approach, especially in functional components where you don't have access to lifecycle methods. It's useful for managing global state, theme, authentication status, and other application-wide data in React applications.