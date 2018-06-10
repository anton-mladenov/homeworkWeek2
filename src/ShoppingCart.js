class ShoppingCart {
    constructor(name, quantity, pricePerUnit) {
        this.name = name
        this.quantity = quantity
        this.pricePerUnit = pricePerUnit
        this.items = []
    }
    display() { 
        console.log(this.name, this.quantity, this.pricePerUnit)
    }
    getItems() {
        return this.items
    }
    addItem(name, quantity, pricePerUnit) {
        this.items.push({
          name: name,
          quantity: quantity,
          pricePerUnit: pricePerUnit
      })
    }
    clear() {
        this.items = []
        return this.items
    }
    clone() {  
            const cartClone = new ShoppingCart()
            this.items.forEach(item => cartClone.addItem(item.name, item.quantity, item.pricePerUnit))
            return cartClone
     }
    }

module.exports = ShoppingCart
