The request life cycle in Django describes how a web request is processed and responded to by the Django framework. Here's a step-by-step workflow of Django's request life cycle:

### 1. URL Routing

1. **Request Initiation:**
   - A user initiates a request by entering a URL in the browser or clicking a link.

2. **URL Resolution (`urls.py`):**
   - Django uses the `urls.py` file(s) to determine which view function or class-based view should handle the request based on URL patterns defined in the project's `urls.py` file.

   Example (`urls.py`):

   ```python
   from django.urls import path
   from . import views

   urlpatterns = [
       path('', views.index, name='index'),
       path('products/', views.product_list, name='product_list'),
       path('product/<int:pk>/', views.product_detail, name='product_detail'),
       # Other URL patterns
   ]
   ```

   In this example, URLs like `/`, `/products/`, and `/product/<int:pk>/` are mapped to corresponding views (`index`, `product_list`, `product_detail`).

### 2. View Processing

3. **View Function or Class-Based View:**
   - Once the URL pattern is matched, Django calls the associated view function or class-based view. Views in Django are responsible for processing the request and returning an HTTP response.

   Example (View Function):

   ```python
   from django.shortcuts import render
   from .models import Product

   def product_list(request):
       products = Product.objects.all()
       return render(request, 'shop/product_list.html', {'products': products})
   ```

   Example (Class-Based View):

   ```python
   from django.views import View
   from django.shortcuts import render
   from .models import Product

   class ProductListView(View):
       def get(self, request):
           products = Product.objects.all()
           return render(request, 'shop/product_list.html', {'products': products})
   ```

4. **Data Processing:**
   - Views can interact with models (`ORM`) to fetch or manipulate data from the database, perform business logic, process forms submitted via POST requests, etc.

### 3. Template Rendering

5. **Template Rendering:**
   - Views pass data (context) to templates, which are HTML files with Django template tags (`{{ }}`, `{% %}`) for dynamic content rendering.

   Example (`product_list.html`):

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Product List</title>
   </head>
   <body>
       <h1>Product List</h1>
       <ul>
       {% for product in products %}
           <li>{{ product.name }} - ${{ product.price }}</li>
       {% endfor %}
       </ul>
   </body>
   </html>
   ```

6. **Template Rendering Engine:**
   - Django's template engine processes templates, replaces template tags with actual values from the context, and generates HTML content.

### 4. HTTP Response

7. **HTTP Response:**
   - The rendered HTML content is returned as an HTTP response to the user's browser, which displays the requested web page.

### Summary

- **Request Initiation:** User sends a request via URL.
- **URL Resolution:** Django matches the URL to a view function or class-based view in `urls.py`.
- **View Processing:** Views handle request processing, data manipulation (if needed), and context preparation.
- **Template Rendering:** Templates receive context data from views and generate HTML output.
- **HTTP Response:** The final HTML response is sent back to the user's browser for display.

Understanding Django's request life cycle helps developers build web applications efficiently, leveraging its powerful features for handling HTTP requests and generating dynamic web content.