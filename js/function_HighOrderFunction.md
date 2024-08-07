In JavaScript, a higher-order function is a function that either takes one or more functions as arguments, returns a function, or both. Higher-order functions are a powerful feature of JavaScript, enabling functional programming techniques and more abstract, reusable, and flexible code.

Here are a few common examples of higher-order functions in JavaScript:

### 1. **Functions that Accept Other Functions as Arguments**

One of the most common uses of higher-order functions is to pass functions as arguments. For example, the `Array.prototype.map()` method is a higher-order function because it takes a function as an argument and applies it to each element of the array.

```javascript
const numbers = [1, 2, 3, 4, 5];

// map takes a function as an argument and applies it to each element
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

### 2. **Functions that Return Other Functions**

Higher-order functions can also return other functions. This pattern is often used in currying and function composition.

**Example: Currying**

Currying is a technique where a function returns another function. This allows for partial application of arguments.

```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // 10
```

In this example, `multiply` is a higher-order function because it returns another function that performs the multiplication.

### 3. **Functions that Use Callback Functions**

A higher-order function often uses callback functions to allow customization of behavior. For instance, `Array.prototype.filter()` is a higher-order function that takes a callback function to determine which elements should be included in the new array.

```javascript
const numbers = [1, 2, 3, 4, 5];

// filter takes a function that returns true or false to decide if an element should be included
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

### 4. **Function Composition**

Higher-order functions are also used in function composition, where multiple functions are combined to create a new function.

```javascript
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const add1 = x => x + 1;
const square = x => x * x;

const add1ThenSquare = compose(square, add1);

console.log(add1ThenSquare(2)); // 9
```

Here, `compose` is a higher-order function because it takes two functions (`f` and `g`) and returns a new function that represents their composition.

### Summary

Higher-order functions are central to many functional programming patterns in JavaScript, making code more modular, reusable, and expressive. They enable you to write functions that operate on other functions, returning new functions or modifying behavior dynamically.
