Sure, here's a comprehensive list of Python data types with examples:

**Numeric Types:**

* **int (integer):** Represents whole numbers (positive, negative, or zero).
  ```python
  age = 30
  score = -85
  ```
* **float:** Represents numbers with decimal points.
  ```python
  pi = 3.14159
  average = 78.5
  ```
* **complex:** Represents complex numbers (a combination of real and imaginary parts).
  ```python
  z = 3 + 4j  # j represents the imaginary unit
  ```

**String Type:**

* **str:** Represents sequences of characters. Can be enclosed in single quotes (''), double quotes (""), or triple quotes (''' or """) for multi-line strings.
  ```python
  name = "Alice"
  greeting = 'Hello, world!'
  multiline = """This is a
  multiline string."""
  ```

**Boolean Type:**

* **bool:** Represents logical values, either True or False.
  ```python
  is_running = True
  is_finished = False
  ```

**Sequence Types:**

* **list:** An ordered, mutable collection of elements of any data type. Enclosed in square brackets `[]`.
  ```python
  fruits = ["apple", "banana", "orange"]
  numbers = [1, 2, 3, 4]
  mixed = ["hello", 42, True]
  ```
* **tuple:** An ordered, immutable collection of elements of any data type. Enclosed in parentheses `()`.
  ```python
  coordinates = (3, 5)  # Represents a point in 2D space
  color_rgb = (255, 0, 0)  # Red color in RGB format
  ```
* **range:** Creates an immutable sequence of numbers within a specified range.
  ```python
  for i in range(5):  # Numbers from 0 to 4 (excluding 5)
      print(i)
  ```

**Mapping Type:**

* **dict (dictionary):** An unordered collection of key-value pairs. Keys must be unique and immutable (e.g., strings, numbers). Enclosed in curly braces `{}`.
  ```python
  person = {"name": "Bob", "age": 35, "city": "New York"}
  phonebook = {"Alice": "123-456-7890", "Bob": "987-654-3210"}
  ```

**Set Type:**

* **set:** An unordered collection of unique elements. Enclosed in curly braces `{}`.
  ```python
  unique_numbers = {1, 2, 3, 2, 1}  # Duplicates are removed
  vowels = {'a', 'e', 'i', 'o', 'u'}
  ```

**None Type:**

* **None:** Represents the absence of a value. Used to indicate that a variable doesn't point to any object.
  ```python
  empty_variable = None
  ```

By understanding these data types and their appropriate use, you can effectively write Python programs and manipulate data efficiently.