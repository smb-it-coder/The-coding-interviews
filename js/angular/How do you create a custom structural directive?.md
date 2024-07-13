Creating a custom structural directive in Angular involves defining a TypeScript class decorated with `@Directive`, implementing the necessary logic to modify the DOM structure based on conditions provided as inputs. Structural directives are prefixed with an asterisk (`*`) when used in Angular templates, similar to built-in directives like `*ngIf` and `*ngFor`.

Here’s a step-by-step guide to creating a custom structural directive:

### Step 1: Define the Directive Class

Create a TypeScript class decorated with `@Directive`. Specify a selector for the directive, prefixed with an asterisk (`*`), and define any inputs needed to control its behavior.

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // Condition is false, show the element
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Condition is true, remove the element
      this.viewContainer.clear();
    }
  }
}
```

### Step 2: Implement Directive Logic

Inside the directive class, implement the logic to handle the condition specified by the `appUnless` input. In this example, if `condition` evaluates to `false`, the directive creates an embedded view using `createEmbeddedView` from the `TemplateRef`, which represents the content to be rendered. If `condition` is `true`, it clears any existing view from the `ViewContainerRef`, effectively removing the content from the DOM.

### Step 3: Use TemplateRef and ViewContainerRef

- **TemplateRef:** Represents the embedded template in the directive's host element. It allows you to access and instantiate the content defined within the host element.
- **ViewContainerRef:** Represents the container where views are attached or removed dynamically. It provides methods like `createEmbeddedView` to instantiate templates and `clear` to remove them.

### Step 4: Use the Directive in Templates

In your Angular component's template, use the custom structural directive by prefixing it with an asterisk (`*`) followed by its selector:

```html
<div *appUnless="condition">
  <!-- Content to be shown unless condition is true -->
  <p>This content is shown unless condition is true.</p>
</div>
```

Here, `appUnless` is the selector of our custom directive, and `condition` is a boolean expression evaluated in the component class.

### Step 5: Register the Directive

Make sure to add the directive to the `declarations` array of your Angular module (typically `app.module.ts`) to make it available throughout your application:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive'; // Import your custom directive

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective // Register your custom directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Summary

Creating a custom structural directive in Angular involves defining a directive class, implementing the logic using `TemplateRef` and `ViewContainerRef`, using it in templates with the asterisk syntax, and registering it in your Angular module. This approach allows you to extend Angular's templating capabilities and build more dynamic and reusable components.