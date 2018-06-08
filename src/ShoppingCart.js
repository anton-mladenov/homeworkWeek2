class ShoppingCart {
    constructor(name, quantity, pricePerUnit) {
        this.name = name
        this.quantity = quantity
        this.pricePerUnit = pricePerUnit
        this.cart = []
        this.cart.items = {}
    }
    display() { 
        console.log(this.name, this.quantity, this.pricePerUnit)
    }
    getItems() {
        return this.cart
    }
    addItem(name, quantity, pricePerUnit) {
        this.cart["items"].name = name,
        this.cart["items"].quantity = quantity,
        this.cart["items"].pricePerUnit = pricePerUnit
        }
    }

    // let cart = []
    // cart.items = {}
  
    // let newNames = names
    //   .map(obj => cart["items"].name = obj)
    //   .map(obj => cart["items"].age = obj)

// let cart = new ShoppingCart("shoes", 3, 69)

// console.log(cart)
// cart.display()

module.exports = ShoppingCart
// /Users/antonmladenov/project/Codaisseur/Week2/Day5/homeworkWeek2/src/ShoppingCart.js



