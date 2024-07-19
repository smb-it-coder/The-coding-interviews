Django middlewares are components that help process requests and responses in a Django application. They are essentially hooks into Django's request-response processing cycle, allowing developers to modify or enhance the request or response globally across all views.

### Role of Django Middlewares

**1. Global Processing:** Middlewares operate on each request and response, providing a way to perform tasks that need to be applied uniformly across the entire application.

**2. Order of Execution:** Middlewares are executed in the order they are defined in the `MIDDLEWARE` setting in `settings.py`, and they can modify request objects before they reach view functions and responses before they are sent back to clients.

**3. Extensibility:** Django's middleware architecture is highly extensible, allowing developers to write custom middlewares to add functionality such as authentication checks, request logging, CORS handling, and more.

### Typical Use Cases of Django Middlewares

Here are some common use cases where Django middlewares are utilized:

#### 1. Authentication Middleware

**Role:** Validates user authentication and sets `request.user` based on session or token information.

**Example:**

```python
from django.contrib.auth.middleware import AuthenticationMiddleware

# AuthenticationMiddleware is enabled by default in MIDDLEWARE setting
```

#### 2. CSRF Middleware

**Role:** Protects against Cross-Site Request Forgery (CSRF) attacks by checking tokens in incoming POST requests.

**Example:**

```python
from django.middleware.csrf import CsrfViewMiddleware

# CsrfViewMiddleware is enabled by default in MIDDLEWARE setting
```

#### 3. CORS Middleware

**Role:** Handles Cross-Origin Resource Sharing (CORS) to allow or restrict access to resources from different domains.

**Example (using `django-cors-headers` library):**

```python
# settings.py
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    ...
]
```

#### 4. Request/Response Logging Middleware

**Role:** Logs incoming requests and outgoing responses for debugging or monitoring purposes.

**Example:**

```python
class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log request details
        response = self.get_response(request)
        # Log response details
        return response
```

#### 5. Compression Middleware

**Role:** Compresses responses for clients that support gzip or deflate encoding.

**Example:**

```python
# settings.py
MIDDLEWARE = [
    ...
    'django.middleware.gzip.GZipMiddleware',
    ...
]
```

### Workflow of Django Middlewares

1. **Initialization:** Django initializes middlewares defined in `MIDDLEWARE` setting when the server starts.

2. **Request Phase:**
   - When a request is received, Django executes middlewares in the order specified in `MIDDLEWARE`.
   - Each middleware's `__call__` method is invoked, allowing it to process or modify the incoming `request` object.
   - Middlewares can modify request headers, add attributes (`request.custom_attr`), or perform checks (e.g., authentication).

3. **View Processing:**
   - After all middlewares are processed, Django resolves the URL and passes the request to the appropriate view function or class-based view.

4. **Response Phase:**
   - Once the view returns a response object (`HttpResponse`), Django executes middlewares in reverse order.
   - Each middleware's `__call__` method is again invoked, allowing it to process or modify the outgoing `response` object.
   - Middlewares can modify response headers, content, or perform post-processing tasks (e.g., logging).

5. **Final Response:**
   - After all middlewares are processed, Django sends the final response back to the client.

### Custom Middleware Example

Here's an example of a custom middleware that logs the timestamp of each request and response:

```python
# myapp/middleware.py

import logging
import time

logger = logging.getLogger(__name__)

class RequestResponseLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = time.time()
        response = self.get_response(request)
        end_time = time.time()

        # Log request and response details
        logger.info(f'Request: {request.method} {request.path}, Processed in {end_time - start_time:.2f} seconds')

        return response
```

### Conclusion

Django middlewares play a crucial role in intercepting and processing requests and responses in a Django application. They provide a flexible mechanism to implement cross-cutting concerns such as authentication, logging, CORS handling, and more, ensuring modular and extensible application architecture. Understanding and utilizing Django middlewares effectively can enhance application functionality, security, and performance.