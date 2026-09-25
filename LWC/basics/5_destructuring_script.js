//Arrau destructing
let arr = ['amazon', 'google', 'facebook']
let [a, , c] = arr
console.log(a, c)

let obj = { name: 'shruthin', age: 34 }
let { name: n, age: b } = obj
console.log(n, b)

console.log(`this is using the string interpolation ${3 + 2}`)
