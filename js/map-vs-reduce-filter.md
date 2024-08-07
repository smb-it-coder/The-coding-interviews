In JavaScript, `map`, `filter`, and `reduce` are powerful array methods used to manipulate and transform data. They each serve different purposes and are essential for functional programming with arrays. Here’s a detailed comparison of the three:

### 1. **`map`**

- **Purpose**: To transform each element of an array and return a new array with the transformed elements.
- **Usage**: `map` applies a function to each element of the array and returns a new array containing the results.
- **Returns**: A new array with the same number of elements as the original array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Doubling each number
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

### 2. **`filter`**

- **Purpose**: To filter out elements from an array based on a condition and return a new array with the elements that satisfy the condition.
- **Usage**: `filter` applies a function to each element of the array and returns a new array with only those elements for which the function returns `true`.
- **Returns**: A new array containing only the elements that pass the test. The number of elements in the new array might be less than or equal to the original array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Filtering out even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

### 3. **`reduce`**

- **Purpose**: To reduce the array to a single value by applying a function that combines each element with an accumulator.
- **Usage**: `reduce` iterates through the array and applies a function that takes two arguments: an accumulator and the current element. The result of the function is used as the accumulator for the next iteration.
- **Returns**: A single value that is the result of combining all elements in the array.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Calculating the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15
```

### Summary of Differences

- **`map`**:
  - **Purpose**: Transform each element of the array.
  - **Returns**: A new array of the same length with transformed elements.
  - **Example Use**: Converting an array of numbers to their squares.

- **`filter`**:
  - **Purpose**: Select elements that meet a certain condition.
  - **Returns**: A new array containing only the elements that satisfy the condition.
  - **Example Use**: Getting all even numbers from an array.

- **`reduce`**:
  - **Purpose**: Accumulate or combine all elements into a single value.
  - **Returns**: A single value resulting from applying the function to each element.
  - **Example Use**: Calculating the total sum or product of an array of numbers.

### Practical Examples

- **`map`**: When you want to modify or format each item in a list (e.g., converting a list of names to uppercase).
- **`filter`**: When you need to extract a subset of items based on certain criteria (e.g., filtering out users older than 18).
- **`reduce`**: When you need to aggregate or accumulate results from a list (e.g., summing up all expenses).

Each method has its specific use cases, and understanding these will help you write more expressive and concise code in JavaScript.
