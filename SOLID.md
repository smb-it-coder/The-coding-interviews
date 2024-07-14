
## 1. Single Responsibility Principle (SRP)
**Definition:** A class should have only one reason to change, meaning it should have only one job or responsibility.
 - **Why is it important?** By ensuring that each class has a single responsibility, you can make your code easier to understand, maintain, and test. It also reduces the risk of unintended side effects when modifying the code.
  
## 2. Open/Closed Principle (OCP)
**Definition:** Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
 - **Why is it important?** This principle encourages you to design your system in a way that allows new functionality to be added without changing existing code. It promotes code reuse, reduces the risk of introducing bugs in existing code, and supports the creation of robust and scalable systems.
  

## 3. Liskov Substitution Principle (LSP)
**Definition:** Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
 - **Why is it important?** It ensures that inheritance is used correctly by maintaining the expected behavior of the base class when it is substituted with its derived classes. This promotes code reuse, simplifies code maintenance, and helps avoid unexpected errors.


## 4. Interface Segregation Principle (ISP)
**Definition:** Clients should not be forced to depend on interfaces they do not use.

   - Why is it important? ISP encourages you to design cohesive and narrowly focused interfaces. This helps to avoid the problems of "fat" interfaces where clients depend on methods they don't need, reducing coupling between classes, and promoting flexibility and maintainability.
  

## 5. Dependency Inversion Principle (DIP)
**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details. Details should depend on abstractions.

   - Why is it important? DIP encourages loose coupling between modules by ensuring that high-level modules do not directly depend on low-level modules, but both depend on abstractions. This allows for easier refactoring, better testability, and promotes the use of dependency injection to manage dependencies.
