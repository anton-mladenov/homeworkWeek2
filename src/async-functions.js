
function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value)
}
setTimeout(loadComplete, 500)
}

function promiseToGiveItBackLater(value) {
  return Promise.resolve(value)
}

function addSomePromises(somePromise) {
  return new Promise ((resolve, reject) => {
    somePromise
    .then(value => { resolve( value + value ) })
    .catch(error => { resolve( error + error + error ) })
  })
}


module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };

























