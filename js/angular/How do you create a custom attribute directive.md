Creating a custom attribute directive in Angular involves defining a TypeScript class decorated with `@Directive`, implementing logic to modify the behavior or appearance of the host element, and optionally interacting with the DOM through the `ElementRef` and `Renderer2`. Attribute directives are applied to elements in Angular templates using their selector as an attribute.

Here’s a step-by-step guide to creating a custom attribute directive:

### Step 1: Define the Directive Class

Create a TypeScript class decorated with `@Directive`. Specify a selector for the directive, which will be used as an attribute in Angular templates.

```typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
```

### Step 2: Implement Directive Logic

Inside the directive class:
- Inject `ElementRef` to access the host element and `Renderer2` to interact with the DOM safely.
- Implement methods or use host listeners (`@HostListener`) to respond to events on the host element (e.g., mouseenter, mouseleave).
- Use `Renderer2` methods like `setStyle` to modify the element's style properties safely.

### Step 3: Use the Directive in Templates

In your Angular component's template, apply the custom attribute directive by using its selector as an attribute on an element:

```html
<div appHighlight>
  Hover over me to highlight!
</div>
```

Here, `appHighlight` is the selector of our custom directive, and it is applied to the `<div>` element. The directive will add behavior to this element based on its implementation.

### Step 4: Register the Directive

Make sure to add the directive to the `declarations` array of your Angular module (typically `app.module.ts`) to make it available throughout your application:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive'; // Import your custom directive

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective // Register your custom directive
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

Creating a custom attribute directive in Angular involves defining a directive class, implementing logic using `ElementRef` and `Renderer2` to interact with the host element, applying it to elements in templates using its selector as an attribute, and registering it in your Angular module. This approach allows you to encapsulate complex DOM manipulations or behaviors into reusable directives that can be applied declaratively in your Angular application.