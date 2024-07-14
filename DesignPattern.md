#### 1. Module Pattern:
  - Groups related code into reusable modules that can be imported into other parts of the application.
  - Promotes code organization, reusability, and separation of concerns.
#### 2. Factory Pattern: [Read More](./?o=5243355831176506#notebook/2986793530519430/command/2986793530519431)
 - Creates objects without exposing the creation logic to the client.
 - Useful for creating complex objects or providing different object types based on input.
####  3. Singleton Pattern:
- Ensures a class has only one instance and provides a global access point to it.
- Use cautiously as singletons can make testing difficult and tight couple code.
#### 4. Builder Pattern:
 - Separates the construction of a complex object from its representation.
 - Improves readability and maintainability of complex object creation.
#### 5. Prototype Pattern:
 - Specifies the kinds of objects to create using a prototype.
 - Simplifies object creation and promotes memory efficiency.
#### 6. Observer Pattern:
 - Defines a one-to-many dependency between objects where one object (subject) maintains a list of its dependents (observers) and notifies them automatically when its state changes.
 - Useful for implementing event-driven systems and loose coupling between objects.
#### 7. Facade Pattern:
 - Provides a simple interface to a complex system.
 - Hides the complexity of the underlying system and improves maintainability.
#### 8. Adapter Pattern:
 - Allows incompatible interfaces to work together.
 - Enables reuse of existing code and promotes flexibility.
#### 9. Strategy Pattern:
 - Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 - Allows dynamic selection of an algorithm at runtime.
#### 10. Command Pattern:
 - Encapsulates a request as an object, which allows for parameterizing clients with different requests, queueing or logging of requests, and undo/redo functionality.
 - Useful for implementing command-based applications and decoupling senders from receivers.
#### 11. Dependency Injection (DI):
 - Provides a way to supply an object's dependencies rather than creating them itself.
 - Improves testability, loose coupling, and maintainability.