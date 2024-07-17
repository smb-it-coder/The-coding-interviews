In Python, a set is a built-in data type that is used to store a collection of unique elements. Sets are mutable, unordered, and do not allow duplicate elements. They are useful for tasks that involve removing duplicates from a collection or performing set operations such as union, intersection, difference, and symmetric difference. Here's an in-depth explanation of sets in Python, along with their built-in functions:

### Creating a Set

You can create a set by enclosing comma-separated elements within curly braces `{}`.

```python
# Creating a set
fruits = {'apple', 'banana', 'cherry'}
print(fruits)  # Output: {'apple', 'banana', 'cherry'}

# Creating an empty set
empty_set = set()
```

### Adding and Removing Elements

Sets are mutable, so you can add and remove elements from them.

#### Adding Elements

- **`add(element)`**: Adds a single element to the set. If the element is already present, the set remains unchanged.

```python
fruits.add('orange')
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'orange'}
```

- **`update(iterable)`**: Adds elements from an iterable (like a list or another set) to the set.

```python
fruits.update(['pineapple', 'grape'])
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'orange', 'pineapple', 'grape'}
```

#### Removing Elements

- **`remove(element)`**: Removes a specified element from the set. Raises `KeyError` if the element is not found.

```python
fruits.remove('banana')
print(fruits)  # Output: {'apple', 'cherry', 'orange', 'pineapple', 'grape'}
```

- **`discard(element)`**: Removes a specified element from the set if it exists. Does not raise an error if the element is not found.

```python
fruits.discard('banana')
print(fruits)  # Output: {'apple', 'cherry', 'orange', 'pineapple', 'grape'}
```

- **`pop()`**: Removes and returns an arbitrary element from the set. Raises `KeyError` if the set is empty.

```python
removed_item = fruits.pop()
print(removed_item, fruits)  # Output: (any arbitrary element), remaining elements in the set
```

- **`clear()`**: Removes all elements from the set.

```python
fruits.clear()
print(fruits)  # Output: set()
```

### Set Operations and Methods

Python sets support a variety of operations and methods for common tasks.

#### Set Operations

- **Union (`|`)**: Returns a new set containing all unique elements from both sets.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1 | set2
print(union_set)  # Output: {1, 2, 3, 4, 5}
```

- **Intersection (`&`)**: Returns a new set containing elements that are common to both sets.

```python
intersection_set = set1 & set2
print(intersection_set)  # Output: {3}
```

- **Difference (`-`)**: Returns a new set containing elements that are in the first set but not in the second set.

```python
difference_set = set1 - set2
print(difference_set)  # Output: {1, 2}
```

- **Symmetric Difference (`^`)**: Returns a new set containing elements that are in either of the sets, but not both.

```python
symmetric_difference_set = set1 ^ set2
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}
```

#### Set Methods

- **`copy()`**: Returns a shallow copy of the set.

```python
set_copy = set1.copy()
```

- **`clear()`**: Removes all elements from the set.

```python
set1.clear()
print(set1)  # Output: set()
```

- **`discard(element)`**: Removes a specified element from the set if it exists.

```python
set1.discard(2)
print(set1)  # Output: {1, 3}
```

- **`pop()`**: Removes and returns an arbitrary element from the set.

```python
removed_item = set1.pop()
print(removed_item, set1)  # Output: (any arbitrary element), remaining elements in the set
```

- **`update(iterable)`**: Adds elements from an iterable (like a list or another set) to the set.

```python
set1.update([4, 5, 6])
print(set1)  # Output: {1, 3, 4, 5, 6}
```

- **`intersection_update(iterable)`**: Updates the set with the intersection of itself and another set or iterable.

```python
set1.intersection_update({3, 4, 7})
print(set1)  # Output: {3, 4}
```

- **`difference_update(iterable)`**: Updates the set with the difference of itself and another set or iterable.

```python
set1.difference_update({4, 5})
print(set1)  # Output: {3}
```

- **`symmetric_difference_update(iterable)`**: Updates the set with the symmetric difference of itself and another set or iterable.

```python
set1.symmetric_difference_update({2, 3})
print(set1)  # Output: {2}
```

### Set Comprehension

Like list comprehensions, you can also create sets using set comprehensions:

```python
set_numbers = {x for x in range(10) if x % 2 == 0}
print(set_numbers)  # Output: {0, 2, 4, 6, 8}
```

### Summary

Sets in Python are versatile data structures used to store collections of unique elements. They provide efficient methods for adding, removing, and performing set operations. Understanding how to create, manipulate, and use sets effectively can simplify tasks involving uniqueness and set operations in your Python programs.