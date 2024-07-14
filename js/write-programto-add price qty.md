Sure, here's an example of how you can create a `Product` class and a `Cart` class in JavaScript:

```javascript
// Product class

/****
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Getter for total price of the product (price * quantity)
    getTotalPrice() {
        return this.price * this.quantity;
    }
}

***/

// Product class
class Product {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    // Getter for product name
    getName() {
        return this.name;
    }

    // Setter for product name
    setName(name) {
        this.name = name;
    }

    // Getter for product quantity
    getQuantity() {
        return this.quantity;
    }

    // Setter for product quantity
    setQuantity(quantity) {
        this.quantity = quantity;
    }

    // Getter for product price
    getPrice() {
        return this.price;
    }

    // Setter for product price
    setPrice(price) {
        this.price = price;
    }
}

// Usage example:

// Create a new product
const laptop = new Product('Laptop', 1, 1200);

// Get product details
console.log(`Product: ${laptop.getName()}, Quantity: ${laptop.getQuantity()}, Price: $${laptop.getPrice().toFixed(2)}`);

// Update product details
laptop.setQuantity(2);
laptop.setPrice(1300);

// Get updated product details
console.log(`Updated Product: ${laptop.getName()}, Quantity: ${laptop.getQuantity()}, Price: $${laptop.getPrice().toFixed(2)}`);


// Cart class
class Cart {
    constructor() {
        this.products = [];
    }

    // Method to add a product to the cart
    addProduct(product) {
        this.products.push(product);
        console.log(`${product.quantity} ${product.name}(s) added to the cart.`);
    }

    // Method to remove a product from the cart
    removeProduct(productName) {
        let indexToRemove = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === productName) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove !== -1) {
            const removedProduct = this.products.splice(indexToRemove, 1)[0];
            console.log(`${removedProduct.quantity} ${removedProduct.name}(s) removed from the cart.`);
        } else {
            console.log(`Product '${productName}' not found in the cart.`);
        }
    }

    // Method to calculate total cost of all products in the cart
    getTotalCartCost() {
        let totalCost = 0;
        this.products.forEach(product => {
            totalCost += product.getTotalPrice();
        });
        return totalCost;
    }

    // Method to display all products in the cart
    displayCart() {
        console.log("Products in the cart:");
        this.products.forEach(product => {
            console.log(`${product.quantity} ${product.name}(s) - Price per unit: $${product.price.toFixed(2)}, Total price: $${product.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total cost of the cart: $${this.getTotalCartCost().toFixed(2)}`);
    }
}

// Usage example:

// Create some products
const product1 = new Product('Laptop', 1200, 1);
const product2 = new Product('Mouse', 25, 2);

// Create a cart
const cart = new Cart();

// Add products to the cart
cart.addProduct(product1);
cart.addProduct(product2);

// Display cart contents
cart.displayCart();

// Remove a product from the cart
cart.removeProduct('Mouse');

// Display cart contents after removal
cart.displayCart();
```

In this example:

- The `Product` class defines a product with properties `name`, `price`, and `quantity`. It also has a method `getTotalPrice()` to calculate the total price based on the quantity.
- The `Cart` class maintains an array `products` to store instances of `Product`. It has methods `addProduct()` to add a product to the cart, `removeProduct()` to remove a product by name, `getTotalCartCost()` to calculate the total cost of all products in the cart, and `displayCart()` to display the contents of the cart.

This simple example demonstrates basic operations of adding products, removing products, and displaying the cart contents using JavaScript classes.
