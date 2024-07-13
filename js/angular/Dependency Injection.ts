/***

Dependency Injection (DI) is a fundamental concept in Angular that allows components and services 
to obtain dependencies from an injector rather than creating them themselves. This promotes loose 
coupling, testability, and reusability.

How it works:
Dependency Definition:

Components or services define their dependencies in their constructor as parameters.
For example:
*/

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  // ...
}

import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(private userService: UserService) { }
}
/***

Dependency Provision:

Angular's injector is responsible for creating and managing instances of dependencies.
Dependencies are registered using providers in modules or components.
The providedIn: 'root' in the UserService tells Angular to create a single instance of the service and share it across the entire application.
Dependency Injection:

When a component or service is created, Angular injects the required dependencies into its constructor.
The injector resolves the dependencies based on their registered providers.
Benefits of Dependency Injection:
Loose coupling: Components and services depend on abstractions (interfaces) rather than concrete implementations.
Testability: Dependencies can be easily mocked for unit testing.
Reusability: Services can be reused across different components.
Maintainability: Code becomes more organized and easier to understand.
Key Points:
Angular's DI system is hierarchical, allowing for different parts of the application to have their own dependency scopes.
You can use @Inject decorator to inject values other than classes.
Angular provides different provider types (factory, value, useClass, useExisting, useValue) to customize dependency creation.
*/