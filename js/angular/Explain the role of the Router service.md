In Angular, the Router service plays a crucial role in enabling navigation between different views (components) in a single-page application (SPA). It provides a way to define navigation paths, navigate to different routes programmatically, and manage application state based on the current route. Here are the key roles and functionalities of the Router service:

1. **Routing Configuration:**
   - The Router allows you to define the navigation paths and associate them with specific components using the `RouterModule.forRoot()` and `RouterModule.forChild()` methods in the Angular module (`AppModule` and feature modules, respectively).
   - Routes are defined using `Route` objects, which specify a path and the component to display when that path is matched.

   Example:
   ```typescript
   const routes: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: 'home', component: HomeComponent },
     { path: 'products', component: ProductsComponent },
     { path: 'product/:id', component: ProductDetailComponent },
     { path: '**', component: PageNotFoundComponent }
   ];
   ```

2. **Navigation:**
   - The Router allows users to navigate between different routes using methods like `routerLink` directive in templates, `navigate()` method in TypeScript code, or imperative navigation through the `Router` service.
   - It handles URL updates and changes the view without reloading the entire page, providing a seamless user experience similar to traditional multi-page applications.

   Example of declarative navigation in template:
   ```html
   <a routerLink="/products">Products</a>
   ```

   Example of programmatic navigation in TypeScript:
   ```typescript
   import { Router } from '@angular/router';

   constructor(private router: Router) {}

   goToProductDetail(id: number): void {
     this.router.navigate(['/product', id]);
   }
   ```

3. **Route Parameters and Data:**
   - Routes can include parameters that allow components to retrieve data based on dynamic values in the URL (`/product/:id`).
   - The Router provides access to route parameters, query parameters, and route data through `ActivatedRoute` service, enabling components to react to changes in route state.

   Example:
   ```typescript
   import { ActivatedRoute } from '@angular/router';

   constructor(private route: ActivatedRoute) {}

   ngOnInit() {
     this.route.params.subscribe(params => {
       const productId = +params['id']; // Retrieve route parameter
       // Use productId to fetch product details
     });
   }
   ```

4. **Route Guards:**
   - The Router supports route guards that can be used to protect routes based on certain conditions (e.g., authentication, authorization, data fetching).
   - Route guards are implemented as services and can be applied to routes using `canActivate`, `canActivateChild`, `canDeactivate`, and `resolve` properties in route configuration.

   Example of `canActivate` guard:
   ```typescript
   import { Injectable } from '@angular/core';
   import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthGuard implements CanActivate {

     constructor(private authService: AuthService, private router: Router) {}

     canActivate(
       next: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): boolean {
       if (this.authService.isLoggedIn()) {
         return true;
       } else {
         this.router.navigate(['/login']);
         return false;
       }
     }
   }
   ```

5. **Router Events:**
   - The Router emits events that allow you to track navigation lifecycle and respond to changes in route state (`NavigationStart`, `NavigationEnd`, `NavigationCancel`, `NavigationError`).
   - These events can be subscribed to in components or services to perform actions based on routing events.

   Example:
   ```typescript
   import { Router, NavigationStart } from '@angular/router';

   constructor(private router: Router) {
     router.events.subscribe(event => {
       if (event instanceof NavigationStart) {
         // Perform actions on navigation start
       }
     });
   }
   ```

In summary, the Router service in Angular facilitates routing and navigation within single-page applications, providing mechanisms to define routes, navigate between views, manage route state, protect routes with guards, and respond to routing events. It forms a critical part of creating structured and navigable Angular applications.