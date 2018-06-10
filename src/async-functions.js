


function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value)
}
setTimeout(loadComplete, 1000)
}

// The function promiseToGiveItBackLater(value) should return a promise that will resolve with the value later. 
// It should use the same function you defined in giveItBackLater. 
// That means you will wrap your callback-style function with a promise-style version.

function promiseToGiveItBackLater(value) {
  return Promise.resolve(value)
}

function addSomePromises(value) {
  return new Promise ( (resolve, reject) => {
    if (!value) {
      reject( console.log(value) )
    }
    resolve( console.log(value) ) 
    }
  )
}

// When the code const outputPromise = addSomePromises(somePromise) is executed, ...
// ...your function should return a new promise that has both a fulfillment handler and a rejection handler.
      // When somePromise resolves with a string "foo", the outputPromise should resolve with a string "foofoo".
      // When somePromise is rejected with the value "bar", the outputPromise should resolve with "barbarbar".
// So, your fulfillment handler should double the string and the rejection handler should triple the string.

// const outputPromise = addSomePromises("foo")
//   .then(value => promiseToGiveItBackLater(value))
// const outputPromise = addSomePromises("foo")
// const outputPromise = addSomePromises("bar")

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };

// Promise.resolve creates a promise that is already resolved.
// const randomNumberInAPromise = Promise.resolve(Math.random())






























