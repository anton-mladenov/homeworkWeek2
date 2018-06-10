class ShoppingCart {
    constructor(name, quantity, pricePerUnit) {
        this.name = name
        this.quantity = quantity
        this.pricePerUnit = pricePerUnit
        this.cart = []
        this.cart.items = []
    }
    display() { 
        console.log(this.name, this.quantity, this.pricePerUnit)
    }
    getItems() {
        return this.cart.items
    }
    addItem(name, quantity, pricePerUnit) {
        this.cart.items.push({
          name: name,
          quantity: quantity,
          pricePerUnit: pricePerUnit
      })
    }
    clear() {
        this.cart.items = []
        return this.cart.items
    }
    clone() {  
        class ShoppingCartClone extends ShoppingCart {
            constructor(...args) {
                super(...args)
            }
        }
        const cartClone = new ShoppingCartClone()
        cartClone.cart = [...this.cart]
        cartClone.cart.items = [...this.cart.items]
        return cartClone
     }
}

// let x = {a: y => y * 2}
// let z = Object.assign({}, x) 
// console.log(z.a(5)); // 10

// let cart = new ShoppingCart()
// // cart.addItem("shoes", 15, 93)
// // cart.addItem("what", 13, 34)
// // cart.addItem("yep", 42, 12)
// cart.getItems()

module.exports = ShoppingCart


// class ShoppingCart {
//     constructor(name, quantity, pricePerUnit) {
//         this.name = name
//         this.quantity = quantity
//         this.pricePerUnit = pricePerUnit
//         this.cart = []
//         this.cart.items = []
//     }
//     display() { 
//         console.log(this.name, this.quantity, this.pricePerUnit)
//     }
//     getItems() {
//         return this.cart.items
//     }
//     addItem(name, quantity, pricePerUnit) {
//         this.cart.items.push({
//           name: name,
//           quantity: quantity,
//           pricePerUnit: pricePerUnit
//       })
//     }
//     clear() {
//         this.cart.items = []
//         return this.cart.items
//     }
//     clone() {  
//       class ShoppingCartClone extends ShoppingCart {
//             constructor(...args) {
//                 super(...args)
//                 // this.cart = [...super.cart]
//                 // this.cart.items = [...super.cart.items]
                   // this.cart = [].concat([...superCart])
                   // this.cart.items = [].concat(superCartItems)
//             }
//         }
//         const cartClone = new ShoppingCartClone()
//         // cartClone.cart = [...this.cart]
//         // cartClone.cart.items = this.cart.items
//         return cartClone
//       }
// }
// const cart = new ShoppingCart()
// cart.addItem("Rolex", 2, 93)
// const cart2 = cart.clone()
// cart2.addItem("shoes", 1, 34)
// cart2.getItems()[0].quantity++
// console.log("cart2, item1 quantity: " + cart2.getItems()[0].quantity)
// console.log("cart1, item1 quantity: " + cart.getItems()[0].quantity)