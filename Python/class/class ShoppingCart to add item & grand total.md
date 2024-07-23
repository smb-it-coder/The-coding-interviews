class Item:
    def __init__(self, name:str, price: int):
        self.name = name
        self.price = price




class ShoppingCart:
    def __init__(self):
        self.items = []

    def add(self, item: Item):
        self.items.append(item)

    def total(self) -> int:
        return sum(item.price for item in self.items)
    
    def __len__(self):
        return len(self.items)



cart = ShoppingCart()
name = "Round Tshirt"
price = 27.5
item = Item(name, int(price))
# add item into cart 
cart.add(item)

# IInd Item adding into cart

name = "Round Tshirt Women"
price = 23.5
item = Item(name, int(price))
# add item into cart 
cart.add(item)    


total_cart_amount= cart.total()
print(f" Total Cart amount : {total_cart_amount}")

total_product_count= cart.__len__()
print(f" Total count : {total_product_count}")

