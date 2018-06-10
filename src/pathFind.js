function pathFind(path, object) {
    let newP = []
    let pathMap = path
    .filter(element => typeof object.author.name === typeof element ? newP.push(object.author.name) : console.log("what?") )
    
    // console.log("Main pathMap: " + pathMap)
    // console.log("newP: " + newP)
    return newP[0]
  }

module.exports = { pathFind };



// let path = ["tonka", "natal"]
// let object = { name: "tonka" }
// function pathFind(path, object) {
//   let pathMap = path
//   .map(element => element === object.name ? console.log(object.name) : console.log("nishto") )
// }

// pathFind(path, object)

// let path = ["foo1", "foo2", "bar"]
// let object = { foo1: { foo2: { bar: "Some value" } } }
// console.log( Object.keys(object.foo1.foo2) )
// function pathFind(path, object) {
//   let pathMap = path
//     .filter( el => Object.keys(object) === el )
//     .map( el => )
//     // return pathMap
// }

// pathFind(path, object)

let path = ["foo1", "foo2", "bar"]
let object = { foo1: { foo2: { bar: "Some value" } } }

function pathFind(path, object) {
  
  let pathJson = path.map(el => JSON.stringify(el))
  // console.log(pathJson)
  
  let pathJson2 = pathJson.map( el => JSON.stringify(el) )
  // console.log(pathJson2)
  
  // let pathJson3 = pathJson2.map( el => JSON.parse(el) )
  // console.log(pathJson3)
  
  let pathMap = pathJson2
    .map( el => Object.keys(object) === JSON.parse(el) )
    // Object.keys(object) === 
    // JSON.parse(el)
  return pathMap
}

pathFind(path, object)