Custom directives in Angular are instructions that you can attach to elements or components to extend their behavior or modify their appearance. They allow you to create reusable functionalities that can be applied across different parts of your application's UI. Custom directives are a powerful feature in Angular that enables you to encapsulate complex DOM manipulations, event handling, and other behaviors into a single reusable unit.

Here are the key aspects of custom directives in Angular:

1. **Types of Custom Directives:**
   - **Attribute Directives:** These modify the behavior or appearance of an element, component, or another directive. They are typically used as attributes in HTML elements.
   - **Structural Directives:** These modify the DOM layout by adding, removing, or manipulating elements based on a condition. They are used as attributes prefixed with an asterisk (`*`) in HTML elements.

2. **Creating Custom Directives:**
   - You create custom directives using the `@Directive` decorator provided by Angular.
   - Directives are TypeScript classes decorated with `@Directive` and configured with a selector, and optionally, additional metadata like inputs, outputs, and host listeners.

   Example of an attribute directive:
   ```typescript
   import { Directive, ElementRef, HostListener } from '@angular/core';

   @Directive({
     selector: '[appHighlight]'
   })
   export class HighlightDirective {
     constructor(private el: ElementRef) {}

     @HostListener('mouseenter') onMouseEnter() {
       this.highlight('yellow');
     }

     @HostListener('mouseleave') onMouseLeave() {
       this.highlight(null);
     }

     private highlight(color: string) {
       this.el.nativeElement.style.backgroundColor = color;
     }
   }
   ```

   Example of a structural directive:
   ```typescript
   import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

   @Directive({
     selector: '[appUnless]'
   })
   export class UnlessDirective {
     private hasView = false;

     constructor(
       private templateRef: TemplateRef<any>,
       private viewContainer: ViewContainerRef
     ) {}

     @Input() set appUnless(condition: boolean) {
       if (!condition && !this.hasView) {
         this.viewContainer.createEmbeddedView(this.templateRef);
         this.hasView = true;
       } else if (condition && this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
       }
     }
   }
   ```

3. **Using Custom Directives:**
   - You apply custom directives to elements or components in your Angular templates using their selectors as attributes.
   - Attribute directives can take inputs and respond to events using host listeners.
   - Structural directives typically use an `*ngIf`-like syntax for conditionally manipulating the DOM structure.

   Example usage in templates:
   ```html
   <div appHighlight>Highlighted Text</div>

   <div *appUnless="condition">Show this content unless condition is true</div>
   ```

4. **Benefits of Custom Directives:**
   - **Reusability:** Directives encapsulate behavior that can be reused across multiple components and templates.
   - **Encapsulation:** Directives provide a clean separation of concerns by abstracting DOM manipulation and behavior from component logic.
   - **Declarative Syntax:** Using directives improves the readability and maintainability of templates by keeping complex logic out of HTML.

Custom directives are an essential part of building modular and reusable Angular applications, allowing you to extend HTML with new attributes and behaviors tailored to your application's specific needs.