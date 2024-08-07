"""
# Use a dictionary to map sets of brackets to their opposites
"""

BRACKETS = {
    '(': ')',
    '{': '}',
    '[': ']'
}



def balanced_brackets(string):
    """
    On each input string, process it using the balance checker
    """
    stack = []
    # Process every character on input
    for char in string:
        # Assign an initial value in case the stack is empty
        last = 0
        # Assign the value of the last element if stack is not empty
        if stack:
            last = stack[len(stack) - 1]
        if stack and last in BRACKETS and BRACKETS[last] == char:
            stack.pop()
        else:
            stack.append(char)

    return not stack

balanced_brackets("{([][[[][]({})]])}")