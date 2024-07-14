


## all sorted lowercase letters are ahead of uppercase letters,
## all sorted uppercase letters are ahead of digits, and
## all sorted even digits are ahead of sorted odd digits.



## case 1 is
def customSort(s):
    # Define a custom sorting key function
    def sortKey(c):
        if c.islower():
            return (0, c) # lowercase letters first
        elif c.isupper():
            return (1, c) # uppercase letters second
        elif c.isdigit():
            if int(c) % 2 == 0:
                return (2, c) # even digit third
            else:
                return (3, c) # odd digit forth
    #Sort the string based on the custom sorting key and join the result
    return ''.join(sorted(s, key=sortKey))

# Example :
input_str = "foobar1237348421"
sorted_str = customSort(input_str)
print(sorted_str)  # Output: "abfoor2244811337"


def customSort_1(s):
    l = len(s)
    lcase = ""
    ucase = ""
    dECase = ""
    dOCase = ""
    
    for c in range(l -1):
        if c.islower():
            lcase += c
        elif c.isupper():
            ucase += c
        elif int(c).isdigit():
            if int(c) % 2 == 0:
                dECase += c
            else:
                dOCase += c
                
    
    final = lcase + ucase + dECase + dOCase
    
    return final



print(customSort_1('Sorting0123456789'))
        