Fizz Buzz Problem states that given an integer n, for every integer i <= n, 
 the task is to print “FizzBuzz” if i is divisible by 3 and 5,
 “Fizz” if i is divisible by 3, “Buzz” if i is divisible by 5 
  or i (as a string) if none of the conditions are true.





  class FizzBuzz:
    def __init__(self, num):
        self.number = num

    def __print__(self):
        output = "";
        for num in range(0, self.number):
            if num % 15 == 0 :
                output += ", FizzBuzz"
            elif num % 5 == 0:
                output += ", Buzz"
            elif num % 3 == 0:
                output += ", Fizz"
            else :
                output += " ," + str(num)

        return output



__fizzbuzz = FizzBuzz(50)
print(__fizzbuzz.__print__())

