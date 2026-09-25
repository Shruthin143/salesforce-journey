//Arrau destructing
let arr = ['amazon', 'google', 'facebook']
let [a, , c] = arr
console.log(a, c)

let obj = { name: 'shruthin', age: 34 }
let { name: n, age: b } = obj
console.log(n, b)

console.log(`this is using the string interpolation ${3 + 2}`)

///String Methods
let str = 'How are you today'
console.log(str.includes('are')) //true
console.log(str.indexOf('y')) //returns first occurrence
console.log(str.indexOf('is'))

console.log(str.startsWith('How'))
console.log(str.slice(0, 3))
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())

let searchText = '    salesf   '
console.log(searchText.trim())
