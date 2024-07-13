/***
 * 
 * 
 * In Angular, data binding is a powerful feature that allows you to synchronize data between the component TypeScript code (the business logic) and the HTML template (the UI). There are four main types of data binding supported in Angular:

1. **Interpolation (One-way binding from component to view):**
   Interpolation allows you to embed expressions into marked-up text by using 
     double curly braces `{{ }}`. For example:

 
   <h1>{{ pageTitle }}</h1>
 
   Here, `pageTitle` is a property defined in the component class, and its value will be rendered in place of `{{ pageTitle }}` in the HTML.

2. **Property Binding (One-way binding from component to view):**
   Property binding lets you set the value of an HTML element's property or attribute.
    Use square brackets `[]` to bind to a property. For example:
   
   <img [src]="imageUrl">
 
   Here, `imageUrl` is a property of the component class containing the URL of an image.

3. **Event Binding (One-way binding from view to component):**
   Event binding allows you to listen to events raised by the DOM (such as button clicks, mouse movements, etc.) and execute some logic in response to those events. Use parentheses `()` to bind to events. For example:
   ```html
   <button (click)="onButtonClick()">Click me!</button>
   ```
   Here, `onButtonClick()` is a method defined in the component class that will be executed when the button is clicked.

4. **Two-way Binding (Bidirectional binding):**
   Two-way binding combines property binding and event binding in a single notation using `[(ngModel)]`. It allows you to update the data in the component and the view simultaneously. To use two-way binding, you need to import `FormsModule` from `@angular/forms` in your Angular module. For example:
   ```html
   <input [(ngModel)]="username">
   ```
   Here, `username` is a property of the component class, and any changes made in the input field will update `username` in the component, and changes to `username` in the component will update the input field.

Data binding in Angular provides a convenient way to keep your application's data and UI in sync, making it easier to develop dynamic and responsive web applications. Understanding these binding types and their appropriate usage is fundamental when working with Angular applications.

 * 
 * 
 * 
 * 
 * **/