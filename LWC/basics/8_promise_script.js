let prom = function () {
  return new Promise((resolve, reject) => {
    if (2 == 12) {
      return resolve('the value is sent')
    } else {
      return reject('this is rejected')
    }
  })
}
prom()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

let fetchReturned = fetch(`https://official-joke-api.appspot.com/random_joke`)
let fetchJson = fetchReturned.then((res) => res.json())
fetchJson.then((res) => console.log(res))
